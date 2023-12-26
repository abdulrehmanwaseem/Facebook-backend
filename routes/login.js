import express from "express";
import { get, post } from "../controller/login.js";

const router = express.Router();

router.route("/login").get(get).post(post);

export default router;
