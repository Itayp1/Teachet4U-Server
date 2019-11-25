const app = require("../../src/server");
const supertest = require("supertest");

test("GET /", done => {
  supertest(app)
    .get("/")
    .expect(200)
    .end(done);
});
test("GET /", done => {
  supertest(app)
    .get("/")
    .expect(200)
    .end(done);
});
