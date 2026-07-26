import mongoose from "mongoose";

const stylistSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      required: true,
    },

    experience: {
      type: String,
      required: true,
    },

    rating: {
      type: Number,
      default: 5,
    },

    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Stylist", stylistSchema);