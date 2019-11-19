const axios = require("axios"),
  jwt = require("jsonwebtoken"),
  CERROR = require("../services/CustomError");
module.exports = class Login {
  constructor(Platform, token, access_token) {
    this.Platform = Platform;
    this.token = token;
    this.access_token = access_token;
    if (Platform == "facebook") {
      axios.defaults.baseURL = `https://graph.facebook.com/debug_token?input_token=${token}&access_token=${access_token}`;
    } else if (Platform == "google") {
      axios.defaults.baseURL = `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${access_token}`;
    } else {
      throw new CERROR("invalid platform", 400);
    }
  }

  async verify() {
    try {
      const result = await axios.get();
      if (result.expires_in <= 0) throw new Error("Expire Token", 401);
      return result.data;
    } catch (error) {
      throw new CERROR("Expire Token", 401);
    }
  }

  decode() {
    console.log(this.token);
    const decoded = jwt.decode(this.token);
    return decoded;
  }
};
