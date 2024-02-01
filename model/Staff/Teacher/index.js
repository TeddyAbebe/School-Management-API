const mongoose = require("mongoose");
const teacherSchema = require("./schema");
const methodFunctions = require("./methods");
const { modelNames } = require("../../../utils");

teacherSchema.method(methodFunctions);

const Teacher = mongoose.model(modelNames.teacher, teacherSchema);

module.exports = Teacher;
