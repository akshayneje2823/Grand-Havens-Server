import express from "express";
import { signUp } from "../controllers/userContoller.js";

const userRouter = express.Router();


// router.route('/user-sign-in').post()
userRouter.post('/user-sign-up',signUp)

export default userRouter