const mongoose = require("mongoose");
const adminSchema = require("./schema");
const methodFunctions = require("./methods");
const { modelNames } = require("../../../utils");

adminSchema.method(methodFunctions);

const Admin = mongoose.model(modelNames.admin, adminSchema);

module.exports = Admin;
