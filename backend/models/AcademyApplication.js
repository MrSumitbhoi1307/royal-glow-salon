import mongoose from "mongoose";

const academySchema = new mongoose.Schema(
  {
    name: String,

    email: String,

    phone: String,

    course: String,

    city: String,

    qualification: String,

    resume: String,

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
  "AcademyApplication",
  academySchema
);