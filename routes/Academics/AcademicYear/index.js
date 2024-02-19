const express = require("express");
const {
  createAcademicYear,
} = require("../../../controller/Academics/AcademicYear");
const isAdmin = require("../../../middlewares/isAdmin");
const isLogin = require("../../../middlewares/isLoggedIn");

const academicYearRouter = express.Router();

academicYearRouter.post("/", isLogin, isAdmin, createAcademicYear);

module.exports = academicYearRouter;
