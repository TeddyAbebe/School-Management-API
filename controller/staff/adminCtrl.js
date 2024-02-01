// @desc Register Admin
// @route POST /API/v1/admins/register
// @access Private
const registerAdminCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin has been registered",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
};

// @desc Login Admin
// @route POST /API/v1/admins/login
// @access Private
const loginAdminCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin has been login",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
};

// @desc Get All Admins
// @route GET /API/v1/admins
// @access Private
const getAdminsCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "All admins",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
};

// @desc Get Single Admins
// @route GET /API/v1/admins/:id
// @access Private
const getAdminCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Single admin",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
};

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
  getAdminCtrl,
  updateAdminCtrl,
  deleteAdminCtrl,
  adminSuspendTeacherCtrl,
  adminUnSuspendTeacherCtrl,
  adminWithdrawTeacherCtrl,
  adminUnWithdrawTeacherCtrl,
  adminPublishExamCtrl,
  adminUnPublishExamCtrl
};
