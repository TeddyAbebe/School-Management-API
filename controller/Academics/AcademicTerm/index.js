const AsyncHandler = require("express-async-handler");
const AcademicTerm = require("../../../model/Academic/AcademicTerm");
const Admin = require("../../../model/Staff/Admin");

// @desc Create Academic Term
// @route POST /api/v1/academic-terms
// @access Private
const createAcademicTerm = AsyncHandler(async (req, res) => {
  const { name, description, duration } = req.body;
  const adminID = req.userAuth._id;

  const createdAcademicTerm = await AcademicTerm.createAcademicTerm(
    name,
    description,
    duration,
    adminID
  );

  res.status(201).json({
    status: "success",
    message: "Academic year created successfully",
    data: createdAcademicTerm,
  });
});

// @desc Get All Academic Terms
// @route Get /api/v1/academic-terms
// @access Private
const getAcademicTerms = AsyncHandler(async (req, res) => {
  const academicTerms = await AcademicTerm.find();

  res.status(201).json({
    status: "success",
    message: "Academic terms fetched successfully",
    data: academicTerms,
  });
});

// @desc Get Single Academic Term
// @route Get /api/v1/academic-terms/:id
// @access Private
const getAcademicTerm = AsyncHandler(async (req, res) => {
  const academicTermID = req.params.id;
  const academicTerm = await AcademicTerm.findById(academicTermID);

  if (academicTerm) {
    res.status(201).json({
      status: "success",
      message: "Academic term fetched successfully",
      data: academicTerm,
    });
  } else {
    res.status(404).json({
      status: "Not Found",
      message: "No Academic Term Registered with that ID",
    });
  }
});

// @desc Update Academic Term
// @route PUT /api/v1/academic-terms/:id
// @access Private
const updateAcademicTerm = AsyncHandler(async (req, res) => {
  const { name, description, duration } = req.body;
  const academicTermID = req.params.id;
  const adminID = req.userAuth._id;

  const updatedAcademicTerm = await AcademicTerm.updateAcademicTerm(
    name,
    description,
    duration,
    academicTermID,
    adminID
  );

  res.status(200).json({
    status: "success",
    message: "Academic term updated successfully",
    data: updatedAcademicTerm,
  });
});

// @desc Delete Academic Term
// @route PUT /api/v1/academic-terms/:id
// @access Private
const deleteAcademicTerm = AsyncHandler(async (req, res) => {
  const academicTermID = req.params.id;

  // Update the Admin
  await Admin.removeAcademicTermFromAdmin(academicTermID);

  // Remove the academic term document
  await AcademicTerm.findByIdAndDelete(academicTermID);

  res.status(201).json({
    status: "success",
    message: "Academic Term deleted successfully",
  });
});

module.exports = {
  createAcademicTerm,
  getAcademicTerms,
  getAcademicTerm,
  updateAcademicTerm,
  deleteAcademicTerm,
};
