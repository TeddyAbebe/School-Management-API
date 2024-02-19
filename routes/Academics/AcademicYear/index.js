const express = require("express");
const {
  createAcademicYear,
  getAcademicYears,
} = require("../../../controller/Academics/AcademicYear");
const isAdmin = require("../../../middlewares/isAdmin");
const isLogin = require("../../../middlewares/isLoggedIn");

const academicYearRouter = express.Router();

academicYearRouter.post("/", isLogin, isAdmin, createAcademicYear);
academicYearRouter.get("/", isLogin, isAdmin, getAcademicYears);

module.exports = academicYearRouter;
