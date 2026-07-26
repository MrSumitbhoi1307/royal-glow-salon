import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Service name is required"],
      trim: true,
    },

    category: {
      type: String,
      enum: [
        "Ladies",
        "Gents",
        "Unisex",
        "Spa",
        "Skin Care",
        "Hair",
        "Bridal",
      ],
      default: "Unisex",
    },

    price: {
      type: Number,
      required: [true, "Price is required"],
    },

    duration: {
      type: String,
      required: [true, "Duration is required"],
      trim: true,
    },

    image: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
      trim: true,
    },

    featured: {
      type: Boolean,
      default: false,
    },

    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Service = mongoose.model("Service", serviceSchema);

export default Service;