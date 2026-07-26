import Gallery from "../models/Gallery.js";
import cloudinary from "../config/cloudinary.js";

// =========================
// GET GALLERY
// =========================

export const getGallery = async (req, res) => {
  try {

    const gallery = await Gallery.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      gallery,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// =========================
// ADD IMAGE
// =========================

export const addGallery = async (req, res) => {

  try {

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please Select Image",
      });
    }

    const file = req.file;

    const result = await cloudinary.uploader.upload(
      `data:${file.mimetype};base64,${file.buffer.toString("base64")}`,
      {
        folder: "RoyalGlow/Gallery",
      }
    );

    const image = await Gallery.create({
      title: req.body.title,
      image: result.secure_url,
    });

    res.status(201).json({
      success: true,
      image,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// =========================
// DELETE IMAGE
// =========================

export const deleteGallery = async (req, res) => {

  try {

    await Gallery.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Image Deleted Successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};