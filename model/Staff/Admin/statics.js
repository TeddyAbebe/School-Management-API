const { generateHashedPassword } = require("../../../utils");

async function updateAdminProfile(data) {
  const { adminId, updatedData } = data;

  const emailExist = await this.findOne({ email: updatedData.email });
  const foundAdmin = await this.findById(adminId);

  if (emailExist) {
    throw new Error("This email already exists");
  }

  if (!foundAdmin) {
    throw new Error("This admin does not exists");
  }

  const updatedFields = {
    name: updatedData.name || foundAdmin.name,
    email: updatedData.email || foundAdmin.email,
    password: updatedData.password
      ? await generateHashedPassword(updatedData.password)
      : foundAdmin.password,
  };

  foundAdmin.name = updatedFields.name;
  foundAdmin.email = updatedFields.email;
  foundAdmin.password = updatedFields.password;

  const updatedAdmin = await foundAdmin.save();

  return updatedAdmin;
}

async function removeAcademicYearFromAdmin(academicYearID) {
  await this.findOneAndUpdate(
    { academicYears: academicYearID },
    { $pull: { academicYears: academicYearID } }
  );
}

async function removeAcademicTermFromAdmin(academicTermID) {
  await this.findOneAndUpdate(
    { academicTerms: academicTermID },
    { $pull: { academicTerms: academicTermID } }
  );
}

module.exports = {
  updateAdminProfile,
  removeAcademicYearFromAdmin,
  removeAcademicTermFromAdmin,
};
