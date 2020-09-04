const bcrypt = require("bcryptjs");
// database connection
const knex = require("../database/connection");
// utils
const generateToken = require("../utils/generateToken");

const UserController = {
  // create order funcionality
  async create(req, res) {
    try {
      let { nome, email, password } = await req.body;

      //  searching in users migration if already exists users with that email
      const userEmail = await knex
        .select("email")
        .from("users")
        .where("email", email);

      //  searching in users migration if already exists users with that name
      const userName = await knex
        .select("nome")
        .from("users")
        .where("nome", nome);

      // here checks if the user email already exists
      if (userEmail.length > 0) {
        res.status(400).send({ error: "This user email already exists" });
      }
      // here checks if this user name already exists
      if (userName.length > 0) {
        res.status(400).send({ error: "This user name already exists" });
      }

      // password must be more than or equal 6 characters
      if (password.length < 6) {
        res.status(400).send({
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
      const insertedUser = await knex("users").insert(user);

      // getting registered user id
      const userId = insertedUser[0];

      // token
      const token = generateToken({ id: userId });

      // reseting req.body password
      password = undefined;

      return res.json({ user_id: userId, nome, email, token });
    } catch (error) {
      res.status(400).send({ error: "User create error" });
      console.log(error);
    }
  },

  // index all users
  async indexAll(req, res) {
    try {
      // getting all users
      const users = await knex("users").select("*");

      return res.json([...users]);
    } catch (error) {
      return res.status(400).send({ error: "Users index error" });
      console.log(error);
    }
  },

  // user authentication
  async userAuthentication(req, res) {
    try {
      let { email, password } = req.body;

      // searching in database if a user with this email send on red.body exists
      const user = await knex
        .select("email")
        .from("users")
        .where("email", email);

      // getting in database the user password
      const userPassword = await knex
        .select("password")
        .from("users")
        .where("email", email);

      // checks if had founded a valid email
      if (user.length === 0) {
        return res.status(400).send({ error: "User not found, invalid email" });
      }

      // checks if the user passwords is correct
      if (!(await bcrypt.compare(password, userPassword[0].password))) {
        return res.status(400).send({ error: "Invalid password" });
      }

      // user id
      const userId = (
        await knex.select("id").from("users").where("email", email)
      )[0].id;

      // token
      const token = generateToken({ id: userId });

      // reseting req.body password
      password = undefined;

      return res.json({ user_id: userId, email, token });
    } catch (error) {
      return res.status(400).send({ error: "User authentication error" });
      console.log(error);
    }
  },
};

module.exports = UserController;
