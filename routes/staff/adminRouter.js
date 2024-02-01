const express = require("express");

const adminRouter = express.Router();

// Register
adminRouter.post("/register", (req, res) => {
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
});

// Login
adminRouter.post("/login", (req, res) => {
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
});

// Get All
adminRouter.get("/", (req, res) => {
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
});

// Get Single Admin
adminRouter.get("/:id", (req, res) => {
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
});

// Update Admin
adminRouter.put("/:id", (req, res) => {
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
});

// Delete Admin
adminRouter.delete("/:id", (req, res) => {
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
});

// Admin suspend teacher
adminRouter.put("/suspend/teacher/:id", (req, res) => {
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
});

// Admin Unsuspend teacher
adminRouter.put("/unsuspend/teacher/:id", (req, res) => {
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
});

// Admin Withdrawing teacher
adminRouter.put("/withdraw/teacher/:id", (req, res) => {
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
});

// Admin Un-Withdraw teacher
adminRouter.put("/unwithdraw/teacher/:id", (req, res) => {
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
});

// Admin Publishing exam result
adminRouter.put("/publish/exam/:id", (req, res) => {
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
});

// Admin Un-Publishing exam result
adminRouter.put("/unpublish/exam/:id", (req, res) => {
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
});

module.exports = adminRouter;
