const mongoose = require('mongoose')
const doctorSchema = new mongoose.Schema({
    name : String ,
    age : Number ,
    speciality: String,
    rating: Number,
    city: String,
})
const Doctor = mongoose.model('Doctor',doctorSchema)
module.exports =Doctor;