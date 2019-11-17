const axios = require("axios");

module.exports = class Login {
  constructor(token, access_token) {
    if (access_token) {
      console.log("acces token");
      axios.defaults.baseURL = `https://graph.facebook.com/debug_token?input_token=${token}&access_token=${access_token}`;
    } else {
      axios.defaults.baseURL = `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${token}`;
    }
    console.log(axios.defaults.baseURL);
  }

  async verify() {
    try {
      const result = await axios.get();
      return result;
    } catch (error) {
      console.log(error);
    }
  }
};
