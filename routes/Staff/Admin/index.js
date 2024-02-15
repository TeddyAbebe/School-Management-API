const express = require("express");
const {
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
  adminUnPublishExamCtrl,
  adminPublishExamCtrl,
} = require("../../../controller/Staff/Admin");
const isLogin = require("../../../middlewares/isLoggedIn");

const adminRouter = express.Router();

// Register
adminRouter.post("/register", registerAdminCtrl);

// Login
adminRouter.post("/login", loginAdminCtrl);

// Get All
adminRouter.get("/", getAdminsCtrl);

// Get Single Admin
adminRouter.get("/:id", isLogin, getAdminCtrl);

// Update Admin
adminRouter.put("/:id", updateAdminCtrl);

// Delete Admin
adminRouter.delete("/:id", deleteAdminCtrl);

// Admin suspend teacher
adminRouter.put("/suspend/teacher/:id", adminSuspendTeacherCtrl);

// Admin Unsuspend teacher
adminRouter.put("/unsuspend/teacher/:id", adminUnSuspendTeacherCtrl);

// Admin Withdrawing teacher
adminRouter.put("/withdraw/teacher/:id", adminWithdrawTeacherCtrl);

// Admin Un-Withdraw teacher
adminRouter.put("/unwithdraw/teacher/:id", adminUnWithdrawTeacherCtrl);

// Admin Publishing exam result
adminRouter.put("/publish/exam/:id", adminPublishExamCtrl);

// Admin Un-Publishing exam result
adminRouter.put("/unpublish/exam/:id", adminUnPublishExamCtrl);

module.exports = adminRouter;
