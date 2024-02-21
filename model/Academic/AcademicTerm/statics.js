const { modelNames } = require("../../../utils");

async function createAcademicTerm(name, description, duration, adminID) {
  const academicTerm = await this.model(modelNames.academicTerm).findOne({
    name,
  });

  if (academicTerm) {
    throw new Error("Academic Term already exists");
  }

  const createdAcademicTerm = await this.create({
    name,
    description,
    duration,
    createdBy: adminID,
  });

  const admin = await this.model(modelNames.admin).findById(adminID);
  admin.academicTerms.push(createdAcademicTerm._id);
  await admin.save();

  return createdAcademicTerm;
}

async function updateAcademicTerm(
  name,
  description,
  duration,
  academicTermID,
  adminID
) {
  // Check name exists
  const existingAcademicTerm = await this.model(
    modelNames.academicTerm
  ).findOne({
    name,
  });

  if (existingAcademicTerm) {
    throw new Error("Academic Term already exists with this Name!");
  }

  // Update the academic term
  const updatedAcademicTerm = await this.findByIdAndUpdate(
    academicTermID,
    { name, description, duration, createdBy: adminID },
    { new: true }
  );

  return updatedAcademicTerm;
}

module.exports = { createAcademicTerm, updateAcademicTerm };
