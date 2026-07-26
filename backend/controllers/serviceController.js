import Service from "../models/Service.js";

// ===========================
// GET ALL SERVICES
// ===========================

export const getServices = async (req, res) => {
  try {
    const services = await Service.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      services,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===========================
// ADD SERVICE
// ===========================

export const addService = async (req, res) => {
  try {
    const service = await Service.create(req.body);

    res.status(201).json({
      success: true,
      message: "Service Added Successfully",
      service,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===========================
// UPDATE SERVICE
// ===========================

export const updateService = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.json({
      success: true,
      message: "Service Updated",
      service,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===========================
// DELETE SERVICE
// ===========================

export const deleteService = async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Service Deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};