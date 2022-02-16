const Admin = require("./adminModel");
const express = require("express");
const adminRouter = express.Router();
const login = require("./adminController")

adminRouter.post("/", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const admin = new Admin({username, password});
    const newAdmin = await admin.save();
    res.send(newAdmin);
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
});
adminRouter.get("/",login);




module.exports = adminRouter;


