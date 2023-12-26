import { Login } from "../model/login.js";

const get = async (res) => {
  try {
    const Login = await Todos.find();
    res.json(Login);
  } catch (error) {
    res.json(error);
  }
};

const post = async (req, res) => {
  try {
    await Login.create(req.body);
    res.json("Todos Created");
  } catch (error) {
    res.json(error);
  }
};

export { get, post };
