import express from "express";
import HomeController from "../controllers/home.controller.js";

const homeRouter = express.Router();

homeRouter.get("/", HomeController.getHome);

export default homeRouter;
