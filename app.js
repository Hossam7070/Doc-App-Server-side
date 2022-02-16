const express = require("express");
const app = express();
const mongoose = require("mongoose");
const doctorRoute = require("./Modules/Doctor/doctorRouter")
app.use(express.json());
app.use(express.urlencoded());
const port = 3000;

app.use('/doctor',doctorRoute);



mongoose.connect("mongodb://localhost:27017/DocAppDb", (err) => {
  if (err) process.exit(1);
  console.log("connected to database successfully");
});

app.listen(port, () => {
  console.log(`express app listening on port ${port}`);
});
app.use((err, req, res, next) => {
  res.send({
    status: err.statusCode,
    message: err.message,
    errors: err.errors || [],
  });
});
