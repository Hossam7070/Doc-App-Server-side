const express = require('express');
const Doctor = require('./doctorModel');
const doctorRouter = express.Router();

doctorRouter.get('/',async (req, res) => {
    const doctors = await Doctor.find();
    res.send(doctors);
})










module.exports =doctorRouter;