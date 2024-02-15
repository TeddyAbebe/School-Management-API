const express = require("express");
const morgan = require("morgan");
const adminRouter = require("../routes/Staff/Admin");
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

// Error Middlewares
app.use(notFoundErr);
app.use(globalErrorHandler);

module.exports = app;
