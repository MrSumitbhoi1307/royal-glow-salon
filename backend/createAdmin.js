import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import bcrypt from "bcrypt";

import Admin from "./models/Admin.js";

await mongoose.connect(process.env.MONGO_URI);

const createAdmin = async () => {
  try {

    const exists = await Admin.findOne({
      email: "admin@royalglow.com",
    });

    if (exists) {
      console.log("Admin Already Exists");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash(
      "Royal@123",
      10
    );

    await Admin.create({
      name: "Sumit Bhoi",
      email: "admin@royalglow.com",
      password: hashedPassword,
      role: "Super Admin",
    });

    console.log("Admin Created Successfully");

    process.exit();

  } catch (error) {

    console.log(error);

    process.exit(1);

  }
};

createAdmin();