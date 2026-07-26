import AcademyApplication from "../models/AcademyApplication.js";

// ===========================
// GET ALL APPLICATIONS
// ===========================

export const getApplications = async (req, res) => {
  try {
    const applications = await AcademyApplication.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      applications,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===========================
// ADD APPLICATION (public form submit)
// ===========================

export const addApplication = async (req, res) => {
  try {
    const application = await AcademyApplication.create(req.body);

    res.status(201).json({
      success: true,
      message: "Application Submitted Successfully",
      application,
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

export const updateApplicationStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const application = await AcademyApplication.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json({
      success: true,
      message: "Status Updated",
      application,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===========================
// DELETE APPLICATION
// ===========================

export const deleteApplication = async (req, res) => {
  try {
    await AcademyApplication.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Application Deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};