const knex = require("../database/connection");

const UserController = {
  // create order funcionality
  async create(req, res) {
    try {
      const { nome, email, password } = await req.body;

      // user
      const user = {
        nome,
        email,
        password,
      };

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
        console.log(error);
      }
      // here checks if this user name already exists
      if (userName.length > 0) {
        res.status(400).send({ error: "This user name already exists" });
        console.log(error);
      }

      // password must be more than or equal 6 characters
      if (password.length >= 6) {
        res.status(400).send({
          error: "The password must to have more than or equal 6 characters",
        });
      }

      // saving user data on users migration
      const insertedUser = await knex("users").insert(user);

      const userId = insertedUser[0];

      return res.json({ userId });
    } catch (error) {
      res.status(400).send({ error });
      console.log(error);
    }
  },

  async indexAll(req, res) {
    try {
      const users = await knex("users").select("*");

      return res.json([...users]);
    } catch (error) {
      console.log(error);
      return res.json({ error });
    }
  },

  async userAuthentication(req, res) {
    try {
      const users = await knex("users").select("*");

      return res.json([...users]);
    } catch (error) {
      console.log(error);
      return res.json({ error });
    }
  },
};

module.exports = UserController;
