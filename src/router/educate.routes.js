import express from "express";
import EducateController from "../controllers/educate.controller.js";

const educateRouter = express.Router();

educateRouter.get("/", EducateController.getAll);

educateRouter.get("/blog", EducateController.getOne);

export default educateRouter;
