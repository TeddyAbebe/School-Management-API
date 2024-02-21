const express = require("express");
const morgan = require("morgan");
const adminRouter = require("../routes/Staff/Admin");
const academicYearRouter = require("../routes/Academics/AcademicYear");
const academicTermRouter = require("../routes/Academics/AcademicTerm");

const {
  globalErrorHandler,
  notFoundErr,
} = require("../middlewares/errorHandler");

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/v1/admins", adminRouter);
app.use("/api/v1/academic-years", academicYearRouter);
app.use("/api/v1/academic-terms", academicTermRouter);

// Error Middlewares
app.use(notFoundErr);
app.use(globalErrorHandler);

module.exports = app;
