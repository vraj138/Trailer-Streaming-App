import express from "express";
import { Login, Logout, SignUp } from "../controllers/user.js";

const router = express.Router();

router.route("/signup").post(SignUp)
router.route("/login").post(Login)
router.route("/logout").get(Logout)

export default router