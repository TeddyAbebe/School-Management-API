const mongoose = require("mongoose");
const adminSchema = require("./schema");
const methodFunctions = require("./methods");
const staticFunctions = require("./statics");
const { modelNames } = require("../../../utils");

adminSchema.static(staticFunctions);
adminSchema.method(methodFunctions);

const Admin = mongoose.model(modelNames.admin, adminSchema);

module.exports = Admin;
