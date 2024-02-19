const express = require("express");
const {
  createAcademicYear,
  getAcademicYears,
  getAcademicYear,
} = require("../../../controller/Academics/AcademicYear");
const isAdmin = require("../../../middlewares/isAdmin");
const isLogin = require("../../../middlewares/isLoggedIn");

const academicYearRouter = express.Router();

academicYearRouter.post("/", isLogin, isAdmin, createAcademicYear);
academicYearRouter.get("/", isLogin, isAdmin, getAcademicYears);
academicYearRouter.get("/:id", isLogin, isAdmin, getAcademicYear);

module.exports = academicYearRouter;
