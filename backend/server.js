import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDB from "./config/db.js";
import "./config/cloudinary.js";

// Routes
import adminRoutes from "./routes/adminRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";
import stylistRoutes from "./routes/stylistRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";
import dashboardRoutes from "./routes/dashboardRoute.js";
import academyRoutes from "./routes/academyRoutes.js";
import franchiseRoutes from "./routes/franchiseRoutes.js";
dotenv.config();

// Database
connectDB();

const app = express();

// ==============================
// GLOBAL MIDDLEWARES
// ==============================

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

// ==============================
// API ROUTES
// ==============================

app.use("/api/admin", adminRoutes);

app.use("/api/appointment", appointmentRoutes);

app.use("/api/services", serviceRoutes);

app.use("/api/stylists", stylistRoutes);

app.use("/api/gallery", galleryRoutes);

app.use("/api/dashboard", dashboardRoutes);

app.use("/api/academy", academyRoutes);

app.use("/api/franchise", franchiseRoutes);

// ==============================
// HOME ROUTE
// ==============================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Royal Glow Salon Backend Running 🚀",
  });
});

// ==============================
// 404 ROUTE
// ==============================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API Route Not Found",
  });
});
// ==============================
// SERVER
// ==============================

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Server Running : http://localhost:${PORT}`);
});