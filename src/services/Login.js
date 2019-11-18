const axios = require("axios");
const jwt = require("jsonwebtoken");
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
      throw new Error("invalid platform");
    }
  }

  async verify() {
    try {
      const result = await axios.get();
      if (result.expires_in <= 0) throw new Error("unotorized");
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }

  decode() {
    console.log(this.token);
    const decoded = jwt.decode(this.token);
    return decoded;
  }
};
