import mongoose from "mongoose";

const franchiseSchema = new mongoose.Schema(
  {
    name: String,

    email: String,

    phone: String,

    city: String,

    investment: String,

    location: String,

    experience: String,

    status: {
      type: String,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "FranchiseApplication",
  franchiseSchema
);