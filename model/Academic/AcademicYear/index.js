const mongoose = require("mongoose");
const academicYearSchema = require("./schema");
const methodFunctions = require("./methods");
const staticFunctions = require("./statics");
const { modelNames } = require("../../../utils");

academicYearSchema.static(staticFunctions);
academicYearSchema.method(methodFunctions);

const AcademicYear = mongoose.model(
  modelNames.academicYear,
  academicYearSchema
);

module.exports = AcademicYear;
