const express = require("express");
const {
  createAcademicYear,
  getAcademicYears,
  getAcademicYear,
  updateAcademicYear,
  deleteAcademicYear,
} = require("../../../controller/Academics/AcademicYear");
const isAdmin = require("../../../middlewares/isAdmin");
const isLogin = require("../../../middlewares/isLoggedIn");

const academicYearRouter = express.Router();

academicYearRouter
  .route("/")
  .post(isLogin, isAdmin, createAcademicYear)
  .get(isLogin, isAdmin, getAcademicYears);

academicYearRouter
  .route("/:id")
  .get(isLogin, isAdmin, getAcademicYear)
  .put(isLogin, isAdmin, updateAcademicYear)
  .delete(isLogin, isAdmin, deleteAcademicYear);

module.exports = academicYearRouter;
