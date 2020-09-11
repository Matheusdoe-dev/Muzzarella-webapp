const bcrypt = require("bcryptjs");
// models
const { User } = require("../models");
// utils
const generateToken = require("../../utils/generateToken");

const UserController = {
  // create order funcionality
  async create(req, res) {
    try {
      let { nome, email, password } = await req.body;

      // password must be more than or equal 6 characters
      if (password.length < 6) {
        return res.status(400).send({
          error: "The password must to have more than or equal 6 characters",
        });
      }

      // user
      const user = {
        nome,
        email,
        // encrypting user password before save in database with bcryptjs
        password: await bcrypt.hash(password, 10),
      };

      // saving user data on users migration
      const insertedUser = await User.create(user);

      // getting registered user id
      const userId = insertedUser.id;

      // token
      const token = generateToken({ id: userId });

      // reseting req.body password
      password = undefined;

      return res.json({ user_id: userId, ...insertedUser, token });
    } catch (error) {
      console.log(error);
      return res.status(400).send({ error: "User create error" });
    }
  },

  // index all users
  async indexAll(req, res) {
    try {
      // getting all users
      const users = await User.findAll();

      return res.json([...users]);
    } catch (error) {
      console.log(error);
      return res.status(400).send({ error: "Users index error" });
    }
  },

  // user authentication
  async userAuthentication(req, res) {
    try {
      let { email, password } = req.body;

      // searching in database if a user with this email send on red.body exists
      const user = await User.findAll({
        where: {
          email,
        },
      });

      // serialized user
      const userSerialized = user.length > 0 ? user[0].dataValues : null;

      // checks if had founded a valid email
      if (!userSerialized) {
        return res.status(400).send({ error: "User not found, invalid email" });
      }

      // checks if the user passwords is correct
      if (!(await bcrypt.compare(password, userSerialized.password))) {
        return res.status(400).send({ error: "Invalid password" });
      }

      // token
      const token = generateToken({ id: userSerialized.id });

      // reseting req.body password
      password = undefined;

      return res.json({ user_id: userSerialized.id, email, token });
    } catch (error) {
      console.log(error);
      return res.status(400).send({ error: "User authentication error" });
    }
  },
};

module.exports = UserController;
