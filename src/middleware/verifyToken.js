const VerifyToken = require("../services/Login");

module.exports = async (req, res, next) => {
  const { platform, token, access_token } = req.headers;
  const verifyToken = new VerifyToken(platform, token, access_token);
  await verifyToken.verify();
  const encodedjwt = await verifyToken.decode();
  res.locals.jwt = encodedjwt;
  console.log(encodedjwt);

  next();
};
