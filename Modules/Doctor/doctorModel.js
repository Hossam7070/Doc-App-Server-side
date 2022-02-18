const mongoose = require('mongoose')
const doctorSchema = new mongoose.Schema({
    doctorName : String ,
    phone:Number,
    gender:String,
    offDays:String,
    age : Number,
    speciality: String,
    rating: Number,
    city: String,
})
const Doctor = mongoose.model('Doctor',doctorSchema)
module.exports =Doctor;
// const data = [{ 
//     'doctorName': 'Ahmed Aly',
//     'age': 34,
//     'speciality': 'ortho',
//     'rating':3, 
//     'city': 'Alexandria'
// }]