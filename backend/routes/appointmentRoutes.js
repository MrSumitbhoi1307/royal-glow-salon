import express from "express";

import {
  createAppointment,
  getAppointments,
  updateAppointmentStatus, // 👈 १. इथे Import वाढवला
  deleteAppointment,
} from "../controllers/appointmentController.js";

const router = express.Router();

// 1. Create Appointment
router.post("/book", createAppointment);

// 2. Get All Appointments
router.get("/", getAppointments);

// 3. Update Appointment Status (नवीन जोडला)
router.patch("/status/:id", updateAppointmentStatus); // 👈 २. स्टेटस अपडेट करण्यासाठी हे रूट आवश्यक आहे

// 4. Delete Appointment
router.delete("/:id", deleteAppointment);

export default router;