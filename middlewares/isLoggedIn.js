const Admin = require("../model/Staff/Admin");
const { verifyToken } = require("../utils");

const isLogin = async (req, res, next) => {
  // Get Token From Header
  const headerObj = req.headers;
  const token = headerObj.auth;

  // Verify Token
  const verifiedToken = verifyToken(token);

  if (verifiedToken) {
    // Find the Admin
    const user = await Admin.findById(verifiedToken.id).select(
      "name email role"
    );

    // Save the User into req.obj
    req.userAuth = user;
    next();
  } else {
    const err = new Error("Invalid Token");
    next(err);
  }
};

module.exports = isLogin;
