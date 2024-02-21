const { modelNames } = require("../../../utils");

async function createAcademicYear(name, fromYear, toYear, adminID) {
  const academicYear = await this.model(modelNames.academicYear).findOne({
    name,
  });

  if (academicYear) {
    throw new Error("Academic year already exists");
  }

  const createdAcademicYear = await this.create({
    name,
    fromYear,
    toYear,
    createdBy: adminID,
  });

  const admin = await this.model(modelNames.admin).findById(adminID);
  admin.academicYears.push(createdAcademicYear._id);
  await admin.save();

  return createdAcademicYear;
}

async function updateAcademicYear(
  name,
  fromYear,
  toYear,
  academicYearID,
  adminID
) {
  // Check name exists
  const existingAcademicYear = await this.model(
    modelNames.academicYear
  ).findOne({
    name,
  });

  if (existingAcademicYear) {
    throw new Error("Academic Year already exists with this Name!");
  }

  // Update the academic year
  const updatedAcademicYear = await this.findByIdAndUpdate(
    academicYearID,
    { name, fromYear, toYear, createdBy: adminID },
    { new: true }
  );

  return updatedAcademicYear;
}

module.exports = { createAcademicYear, updateAcademicYear };
