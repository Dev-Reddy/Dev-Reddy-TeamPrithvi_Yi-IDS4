import express from "express";
import EducateController from "../controllers/educate.controller";

const router = express.Router();

router.get("/", EducateController.getAll);

router.get("/blog", EducateController.getOne);
