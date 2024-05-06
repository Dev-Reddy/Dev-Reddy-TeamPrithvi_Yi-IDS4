import express from "express";
import ComplaintController from "../controllers/complaint.controller.js";
import { complaintUpload } from "../middlewares/complaintUpload.middleware.js";

const complaintRouter = express.Router();

complaintRouter.get("/new", ComplaintController.getComplaintForm);
complaintRouter.post("/new", complaintUpload, ComplaintController.addComplaint);
complaintRouter.get("/", ComplaintController.getComplaints);
complaintRouter.get("/:id", ComplaintController.getComplaint);

export default complaintRouter;
