const { generateHashedPassword, modelNames, verifyPassword } = require("../../../utils");
const bcrypt = require("bcryptjs");

async function registerAdmin() {
  const { email, password } = this;

  try {
    // Check if Admin exists
    const foundAdmin = await this.model(modelNames.admin).findOne({ email });

    if (foundAdmin) {
      const error = new Error("Admin already exists");

      error.status = 409; // HTTP Conflict status code

      throw error;
    }

    // Hash Password
    if (password) {
      this.password = await generateHashedPassword(password);
    }

    const admin = await this.save();

    return admin;
  } catch (error) {
    throw error;
  }
}



async function loginAdmin() {
  const { email, password } = this;

  try {
    // Find User
    const user = await this.model(modelNames.admin).findOne({ email });

    if (!user) {
      const error = new Error("Invalid Credentials");
      error.status = 404; // HTTP Not Found status code
      throw error;
    }

    // Verify Password
    const validPassword = await verifyPassword.call(user, password);

    if (!validPassword) {
      const error = new Error("Invalid Credentials");
      error.status = 401; // HTTP Unauthorized status code
      throw error;
    }

    return user;
  } catch (error) {
    throw error;
  }
}

module.exports = { registerAdmin, loginAdmin };
