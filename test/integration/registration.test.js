const models = require("../../src/models")();
const mongooseLoader = require("../../src/loaders/mongoose");
const app = require("../../src/loaders/expresstest");
const supertest = require("supertest");
process.env.ENV === "test";
let start;
beforeEach(async () => {
  console.log("before");
});

test("should return 200 health check", async () => {
  supertest(app)
    .get("/health")
    .expect(200);
});
test("should return 220 health check", async () => {
  await supertest(app)
    .post("/api/registration/student")
    .expect(401);
});
