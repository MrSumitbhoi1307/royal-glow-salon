import Stylist from "../models/Stylist.js";

// ============================
// GET ALL STYLISTS
// ============================

export const getStylists = async (req, res) => {
  try {
    const stylists = await Stylist.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      stylists,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ============================
// ADD STYLIST
// ============================

export const addStylist = async (req, res) => {
  try {
    const stylist = await Stylist.create(req.body);

    res.status(201).json({
      success: true,
      message: "Stylist Added Successfully",
      stylist,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ============================
// UPDATE STYLIST
// ============================

export const updateStylist = async (req, res) => {
  try {
    const stylist = await Stylist.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.json({
      success: true,
      message: "Stylist Updated",
      stylist,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ============================
// DELETE STYLIST
// ============================

export const deleteStylist = async (req, res) => {
  try {
    await Stylist.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Stylist Deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};