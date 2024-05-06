//1. Import

import express from "express";
import RainStatusController from "../controllers/rain-status.controller.js";

//2. Create Router
const rainStatusRouter = express.Router();

//3. Create instance of user controller

//4. Define routes

//GET rain status
rainStatusRouter.get("/", RainStatusController.getRainStatus);
//5. Export Router

export default rainStatusRouter;
