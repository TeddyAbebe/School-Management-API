const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const modelNames = {
  admin: "Admin",
  teacher: "Teacher",
  student: "Student",
  classLevel: "ClassLevel",
  program: "Program",
  subject: "Subject",
  questions: "Questions",
  exam: "Exam",
  examResults: "ExamResults",
  yearGroup: "YearGroup",
  academicYear: "AcademicYear",
  academicTerm: "AcademicTerm",
};

const generateHashedPassword = async (cleanPassword) => {
  const salt = await bcrypt.genSalt(10);

  const hashedPassword = await bcrypt.hash(cleanPassword, salt);

  return hashedPassword;
};

const verifyPassword = async function (enteredPassword) {
  const isPasswordValid = await bcrypt.compare(enteredPassword, this.password);
  return isPasswordValid;
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_KEY, { expiresIn: "5d" });
};

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
    if (err) {
      return false;
    } else {
      return decoded;
    }
  });
};

module.exports = {
  modelNames,
  generateHashedPassword,
  verifyPassword,
  generateToken,
  verifyToken,
};
