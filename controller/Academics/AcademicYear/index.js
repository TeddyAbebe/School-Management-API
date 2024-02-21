const AsyncHandler = require("express-async-handler");
const AcademicYear = require("../../../model/Academic/AcademicYear");
const Admin = require("../../../model/Staff/Admin");

// @desc Create Academic Year
// @route POST /api/v1/academic-years
// @access Private
const createAcademicYear = AsyncHandler(async (req, res) => {
  const { name, fromYear, toYear } = req.body;
  const adminID = req.userAuth._id;

  const createdAcademicYear = await AcademicYear.createAcademicYear(
    name,
    fromYear,
    toYear,
    adminID
  );

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

  if (academicYear) {
    res.status(201).json({
      status: "success",
      message: "Academic year fetched successfully",
      data: academicYear,
    });
  } else {
    res.status(404).json({
      status: "Not Found",
      message: "No Academic Year Registered with that ID",
    });
  }
});

// @desc Update Academic Year
// @route PUT /api/v1/academic-years/:id
// @access Private
const updateAcademicYear = AsyncHandler(async (req, res) => {
  const { name, fromYear, toYear } = req.body;
  const academicYearID = req.params.id;
  const adminID = req.userAuth._id;

  const updatedAcademicYear = await AcademicYear.updateAcademicYear(
    name,
    fromYear,
    toYear,
    academicYearID,
    adminID
  );

  res.status(200).json({
    status: "success",
    message: "Academic year updated successfully",
    data: updatedAcademicYear,
  });
});

// @desc Delete Academic Year
// @route PUT /api/v1/academic-years/:id
// @access Private
const deleteAcademicYear = AsyncHandler(async (req, res) => {
  const academicYearID = req.params.id;

  // Update the Admin
  await Admin.removeAcademicYearFromAdmin(academicYearID);

  // Remove the academic year document
  await AcademicYear.findByIdAndDelete(academicYearID);

  res.status(201).json({
    status: "success",
    message: "Academic year deleted successfully",
  });
});

module.exports = {
  createAcademicYear,
  getAcademicYears,
  getAcademicYear,
  updateAcademicYear,
  deleteAcademicYear,
};
