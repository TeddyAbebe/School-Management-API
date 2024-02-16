const AsyncHandler = require("express-async-handler");
const Admin = require("../../../model/Staff/Admin");
const { generateToken, verifyToken } = require("../../../utils");

// @desc Register Admin
// @route POST /API/v1/admins/register
// @access Private
const registerAdminCtrl = AsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const admin = new Admin({
    name,
    email,
    password,
  });

  const newAdmin = await admin.registerAdmin();

  res.status(201).json({
    status: "success",
    data: newAdmin,
    message: "Admin registered successfully",
  });
});

// @desc Login Admin
// @route POST /API/v1/admins/login
// @access Private
const loginAdminCtrl = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const adminToLogin = new Admin({ email, password });

  const loggedInAdmin = await adminToLogin.loginAdmin();

  res.status(201).json({
    status: "success",
    data: generateToken(loggedInAdmin._id),
    message: "Admin logged in successfully",
  });
});

// @desc Get All Admins
// @route GET /API/v1/admins
// @access Private
const getAdminsCtrl = AsyncHandler(async (req, res) => {
  const admins = await Admin.find();

  res.status(200).json({
    status: "success",
    message: "Admin fetched successfully",
    data: admins,
  });
});

// @desc Get Single Admins
// @route GET /API/v1/admins/:id
// @access Private
const getAdminProfileCtrl = AsyncHandler(async (req, res) => {
  const Id = req.userAuth._id;
  const admin = await Admin.findById(Id).select(
    "-password -createdAt -updatedAt"
  );
  if (!admin) {
    throw new Error("Admin Not Found");
  } else {
    res.status(200).json({
      status: "success",
      data: admin,
      message: "Admin profile fetched successfully",
    });
  }
});

// @desc Update Admins
// @route PUT /API/v1/admins/:id
// @access Private
const updateAdminCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Update admin",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
};

// @desc Delete Admin
// @route DELETE /API/v1/admins/:id
// @access Private
const deleteAdminCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Delete admin",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
};

// @desc Admin Suspend Teacher
// @route PUT /API/v1/admins/suspend/teacher/:id
// @access Private
const adminSuspendTeacherCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin suspend teacher",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
};

// @desc Admin Un-Suspend Teacher
// @route PUT /API/v1/admins/unsuspend/teacher/:id
// @access Private
const adminUnSuspendTeacherCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin Unsuspend teacher",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
};

// @desc Admin Withdraw Teacher
// @route PUT /API/v1/admins/withdraw/teacher/:id
// @access Private
const adminWithdrawTeacherCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin Withdraw teacher",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
};

// @desc Admin Un-Withdraw Teacher
// @route PUT /API/v1/admins/unwithdraw/teacher/:id
// @access Private
const adminUnWithdrawTeacherCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin Un-Withdraw teacher",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
};

// @desc Admin Publishing Exam result
// @route PUT /API/v1/admins/publish/exam/:id
// @access Private
const adminPublishExamCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin Publish exam",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
};

// @desc Admin Un-Publishing exam result
// @route PUT /API/v1/admins/unpublish/exam/:id
// @access Private
const adminUnPublishExamCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin Un-Publish exam",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
};

module.exports = {
  registerAdminCtrl,
  loginAdminCtrl,
  getAdminsCtrl,
  getAdminProfileCtrl,
  updateAdminCtrl,
  deleteAdminCtrl,
  adminSuspendTeacherCtrl,
  adminUnSuspendTeacherCtrl,
  adminWithdrawTeacherCtrl,
  adminUnWithdrawTeacherCtrl,
  adminPublishExamCtrl,
  adminUnPublishExamCtrl,
};
