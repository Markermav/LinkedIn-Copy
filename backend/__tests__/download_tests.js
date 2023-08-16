const router = {
    get: (path, handler) => {
      const res = {
        address: null,
        sendFile: (address) => {
          res.address = address;
        },
      };
      handler({}, res);
    },
  };
  

  const fileRoutes = {
    get: router.get, 
  };
  

  describe("GET /resume/:file", () => {
    it("should send the file", () => {
      fileRoutes.get("/resume/:file", (req, res) => {
        console.log("Resume Address:", res.address);
      });
    });
  });
  
  describe("GET /profile/:file", () => {
    it("should send the file", () => {
      fileRoutes.get("/profile/:file", (req, res) => {
        console.log("Profile Address:", res.address);
      });
    });
  });
  
