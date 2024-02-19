const AsyncHandler = require("express-async-handler");
const AcademicYear = require("../../../model/Academic/AcademicYear");
const Admin = require("../../../model/Staff/Admin");

// @desc Create Academic Year
// @route POST /api/v1/academic-years
// @access Private
const createAcademicYear = AsyncHandler(async (req, res) => {
  const { name, fromYear, toYear, createdBy } = req.body;

  // Check if exists
  const academicYear = await AcademicYear.findOne({ name });
  if (academicYear) {
    throw new Error("Academic year already exists");
  }

  // Create
  const createdAcademicYear = await AcademicYear.create({
    name,
    fromYear,
    toYear,
    createdBy: req.userAuth._id,
  });

  res.status(201).json({
    status: "success",
    message: "Academic year created successfully",
    data: createdAcademicYear,
  });
});

// @desc Get All Academic Years
// @route Get /api/v1/academic-years
// @access Private
const getAcademicYears = AsyncHandler(async (req, res) => {
  const academicYears = await AcademicYear.find();

  res.status(201).json({
    status: "success",
    message: "Academic years fetched successfully",
    data: academicYears,
  });
});

// @desc Get Single Academic Year
// @route Get /api/v1/academic-years/:id
// @access Private
const getAcademicYear = AsyncHandler(async (req, res) => {
  const academicYearID = req.params.id;
  const academicYear = await AcademicYear.findById(academicYearID);

  res.status(201).json({
    status: "success",
    message: "Academic year fetched successfully",
    data: academicYear,
  });
});

module.exports = {
  createAcademicYear,
  getAcademicYears,
  getAcademicYear,
};
