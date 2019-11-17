const VerifyToken = require("../services/Login");

module.exports = async (req, res, next) => {
  const { token } = req.headers;
  const verifyToken = new VerifyToken(token);
  try {
    const result = await verifyToken.verify();
    console.log(result.data);
  } catch (error) {
    next(error);
  }

  next();
};
