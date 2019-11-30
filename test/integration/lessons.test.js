/* eslint-disable no-undef */
const mongooseLoader = require("./mongoose"),
  expect = require("chai").expect;

const { axiosGoogleTokenStudent } = require("./axios");

beforeAll(async () => {
  await mongooseLoader();
});

describe("Lessons /api/lessons/", () => {
  describe("/POST appointmentLesson", () => {
    it("should appointment Lesson", async () => {
      const res = await axiosGoogleTokenStudent.post(
        "/api/lessons/appointmentLesson",
        {
          teacherEmail: "peretz.itay@gmail.com",
          studentEmail: "inon@gmail.com",
          cource: "חשבון",
          date: "14/11/2019",
          time: "15"
        }
      );

      expect(res.status).to.equal(200);
      expect(res.data).to.include.all.keys("status", "_id");
      expect(res.data).to.include({ status: "awating" });
    });
  });

  describe("/GET getavaiabletime", () => {
    it("should return avaiable time", async () => {
      const res = await axiosGoogleTokenStudent.get(
        "/api/lessons/getavaiabletime?email=peretz.itay@gmail.com&date=14-11-2019"
      );

      expect(res.status).to.equal(200);
    });
  });
  describe("/GET timetable", () => {
    it("should return all  the lessons", async () => {
      const res = await axiosGoogleTokenStudent.get(
        "/api/lessons/timetable?email=peretz.itay@gmail.com"
      );

      expect(res.status).to.equal(200);
      expect(res.data).to.include.keys("timeTable");
      expect(res.data.timeTable.length).to.least(1);
    });
  });
});
