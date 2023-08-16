const assert = require("assert");


const mockUserData = [{ name: "User 1" }, { name: "User 2" }];
const mockRecruiterData = [{ name: "Recruiter 1" }, { name: "Recruiter 2" }];


const User = {
  find: async () => mockUserData
};

const Recruiter = {
  find: async () => mockRecruiterData
};


const router = {
  get: (path, handler) => {
    if (path === "/student") {
      handler({},{ json: data => assert.deepEqual(data, { data: mockUserData }) });
    }
    if (path === "/recruiter") {
      handler({},{ json: data => assert.deepEqual(data, { data: mockRecruiterData }) });
    }
  }
};


describe("GET /student", () => {
  it("should return a list of students", () => {
    router.get("/student", (req, res) => {
      res.json({ data: mockUserData });
    });
  });
});

describe("GET /recruiter", () => {
  it("should return a list of recruiters", () => {
    router.get("/recruiter", (req, res) => {
      res.json({ data: mockRecruiterData });
    });
  });
});
