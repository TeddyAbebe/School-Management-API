const mongoose = require("mongoose");
const academicTermSchema = require("./schema");
const methodFunctions = require("./methods");
const staticFunctions = require("./statics");
const { modelNames } = require("../../../utils");

academicTermSchema.static(staticFunctions);
academicTermSchema.method(methodFunctions);

const AcademicTerm = mongoose.model(
  modelNames.academicTerm,
  academicTermSchema
);

module.exports = AcademicTerm;
