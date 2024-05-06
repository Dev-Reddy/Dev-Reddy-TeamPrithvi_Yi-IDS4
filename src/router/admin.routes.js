//1. Import

import express from "express";
import AdminController from "../controllers/admin.controller.js";

//2. Create Router
const adminRouter = express.Router();

//3. Define routes
adminRouter.get("/", AdminController.getDashboard);
adminRouter.get("/send-alert", AdminController.sendAlert);

//5. Export Router

export default adminRouter;
