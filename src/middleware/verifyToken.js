const VerifyToken = require("../services/Login");

const verifyToken = new VerifyToken(
  "ya29.Il-xB8WOt4Ukk0fN7fXOJFvrqVpcPXQ50LFBstOKuGyW-GCYLFCzddEm1sjvvDEKBIQzYG4lsN5Zjuo8M_zPz1EvI0ZM2RhcQt6kO3ajob2r8T3nNv6gD5Tq7hx0CGL64g"
);
console.log("result");
const synca = async () => {
  const result = await verifyToken.verify();
  console.log(result);
  return result;
};
synca();
// module.exports = async (req, res, next) => {

//   next();
// };
