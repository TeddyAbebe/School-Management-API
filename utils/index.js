const bcrypt = require("bcryptjs");

const modelNames = {
  admin: "Admin",
  teacher: "Teacher",
};

const generateHashedPassword = async (cleanPassword) => {
  const salt = await bcrypt.genSalt(10);

  const hashedPassword = await bcrypt.hash(cleanPassword, salt);

  return hashedPassword;
};

module.exports = { generateHashedPassword, modelNames };
