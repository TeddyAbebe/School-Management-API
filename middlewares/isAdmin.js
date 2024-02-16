const Admin = require("../model/Staff/Admin");

const isAdmin = async (req, res, next) => {
  // Find the User

  const userId = req.userAuth._id;

  const adminFound = await Admin.findById(userId);

  // Check if the user is an Admin
  if (adminFound?.role === "admin") {
    next();
  } else {
    const err = new Error("Access Denied, Admins Only!");

    next(err);
  }
};

module.exports = isAdmin;
