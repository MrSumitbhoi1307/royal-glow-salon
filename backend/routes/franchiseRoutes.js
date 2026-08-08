import express from "express";

import {
  getFranchises,
  addFranchise,
  updateFranchiseStatus,
  deleteFranchise,
  getActiveCities,
} from "../controllers/franchiseController.js";

const router = express.Router();

router.get("/", getFranchises);

router.get("/active-cities", getActiveCities);

router.post("/", addFranchise);

router.put("/:id", updateFranchiseStatus);

router.delete("/:id", deleteFranchise);

export default router;