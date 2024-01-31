const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const adminSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "admin",
    },
  },
  {
    timestamps: true,
  }
);

// Model
const Admin = model("Admin", adminSchema);

module.exports = Admin;
