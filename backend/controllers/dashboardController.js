import Appointment from "../models/Appointment.js";
import Service from "../models/Service.js";
import Stylist from "../models/Stylist.js";
import Gallery from "../models/Gallery.js";

export const getDashboardStats = async (req, res) => {
  try {
    const appointments = await Appointment.countDocuments();
    const services = await Service.countDocuments();
    const stylists = await Stylist.countDocuments();
    const gallery = await Gallery.countDocuments();

    // Revenue: sum of price for Completed appointments
    // (price is stored as String, so convert with $toDouble)
    const revenueResult = await Appointment.aggregate([
      { $match: { status: "Completed" } },
      {
        $group: {
          _id: null,
          total: { $sum: { $toDouble: "$price" } },
        },
      },
    ]);

    const revenue = revenueResult[0]?.total || 0;

    // Reviews model doesn't exist yet — placeholder
    const reviews = 0;

    res.json({
      success: true,
      stats: {
        appointments,
        services,
        stylists,
        gallery,
        revenue,
        reviews,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};