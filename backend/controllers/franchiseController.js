import Franchise from "../models/Franchise.js";

// ===========================
// GET ALL FRANCHISE APPLICATIONS
// ===========================

export const getFranchises = async (req, res) => {
  try {
    const franchises = await Franchise.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      franchises,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===========================
// ADD FRANCHISE APPLICATION (public form submit)
// ===========================

export const addFranchise = async (req, res) => {
  try {
    const franchise = await Franchise.create(req.body);

    res.status(201).json({
      success: true,
      message: "Franchise Application Submitted Successfully",
      franchise,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===========================
// UPDATE STATUS (Approve / Reject)
// ===========================

export const updateFranchiseStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const franchise = await Franchise.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json({
      success: true,
      message: "Status Updated",
      franchise,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===========================
// DELETE FRANCHISE APPLICATION
// ===========================

export const deleteFranchise = async (req, res) => {
  try {
    await Franchise.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Franchise Application Deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===========================
// GET ACTIVE CITIES (Approved franchises)
// ===========================

export const getActiveCities = async (req, res) => {
  try {
    const cities = await Franchise.distinct("city", {
      status: "Approved",
    });

    res.status(200).json({
      success: true,
      cities,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};