/* eslint-disable no-undef */
const request = require("supertest");
server = require("../../src/loaders/express-test");

describe("/api/registration", () => {
  // beforeEach(async () => {
  //   server = require("../../src/loaders/express-test");
  // });
  // afterEach(async () => {
  //   server.close();
  // });

  describe("POST /teacher", () => {
    it("should create new user", async () => {
      request(server).get("/health");
      // .set("x-auth-token", token)
      expect(res).toBe(401);
    });
  });
});
