import express from "express";

import {
  getGallery,
  addGallery,
  deleteGallery,
} from "../controllers/galleryController.js";

import upload from "../middlewares/upload.js";

const router = express.Router();

router.get("/", getGallery);

router.post(
  "/",
  upload.single("image"),
  addGallery
);

router.delete("/:id", deleteGallery);

export default router;