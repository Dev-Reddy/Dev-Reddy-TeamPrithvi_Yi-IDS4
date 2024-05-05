//1. Import

import express from "express";
import UserController from "../controllers/user.controller.js";
import { idDocumentUpload } from "../middlewares/idUpload.middleware.js";

//2. Create Router
const userRouter = express.Router();

//3. Create instance of user controller

//4. Define routes

//GET signin page
userRouter.get("/signin", UserController.getSignIn);

//POST signin
userRouter.post("/signin", UserController.signIn);

//POST signout
userRouter.post("/signout", UserController.signOut);

//GET signup page

userRouter.get("/signup", UserController.getSignUp);

//POST signup

userRouter.post("/signup", idDocumentUpload, UserController.signUp);

//5. Export Router

export default userRouter;
