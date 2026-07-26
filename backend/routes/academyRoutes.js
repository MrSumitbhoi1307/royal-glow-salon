import express from "express";

import {
  getApplications,
  addApplication,
  updateApplicationStatus,
  deleteApplication,
} from "../controllers/academyController.js";

const router = express.Router();

router.get("/", getApplications);

router.post("/", addApplication);

router.put("/:id", updateApplicationStatus);

router.delete("/:id", deleteApplication);

export default router;