const express = require("express");
const Doctor = require("./doctorModel");
const doctorRouter = express.Router();

doctorRouter.get("/", async (req, res) => {
  const doctors = await Doctor.find({}, "doctorName speciality");
  res.send(doctors);
});

doctorRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const doctor = await Doctor.findById(id);
  res.send(doctor);
});

doctorRouter.post("/", async (req, res, next) => {
  const { doctorName, age, rating, speciality, city } = req.body;
  try {
    const doctor = new Doctor({ doctorName, age, rating, speciality, city });
    const createdDoctor = await doctor.save();
    res.send(createdDoctor);
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
});
doctorRouter.patch("/:id", async (req, res, next) => {
  const { doctorName, age, rating, speciality, city } = req.body;
  const { id } = req.params;
  try {
    const updated = await Doctor.findByIdAndUpdate(id, {
      doctorName,
      age,
      rating,
      speciality,
      city,
    });
    res.send(updated);
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
});

doctorRouter.delete("/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
     const deleted = await Doctor.findByIdAndDelete(id);
    res.send("deleted successfully");
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
});

module.exports = doctorRouter;
