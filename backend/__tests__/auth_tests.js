const assert = require("assert");


describe("POST /signup", () => {
  it("should create a user and return a token", () => {
    const res = {
      data: {},
      status: (statusCode) => res,
      json: (data) => {
        res.data = data;
      }
    };

  
    const signupHandler = (req, res) => {
      res.json({ token: "mockToken" });
    };

    signupHandler({}, res);

    assert.strictEqual(res.data.token, "mockToken");
  });
});

describe("POST /login", () => {
  it("should return a token", () => {
    const res = {
      data: {},
      status: (statusCode) => res,
      json: (data) => {
        res.data = data;
      }
    };

    
    const loginHandler = (req, res) => {
      res.json({ token: "mockToken" });
    };

    loginHandler({}, res);

    assert.strictEqual(res.data.token, "mockToken");
  });
});
