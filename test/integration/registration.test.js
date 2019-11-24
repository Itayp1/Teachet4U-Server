/* eslint-disable no-undef */
const request = require("supertest");

let server;

describe("/api/registration", () => {
  beforeEach(() => {
    server = require("../../src/app");
  });
  afterEach(async () => {
    await server.close();
  });

  describe("POST /teacher", () => {
    it("should create new user", async () => {
      const res = await request(server).post("/api/registration/teacher");
      expect(res.status).toBe(401);
    });
  });
});
