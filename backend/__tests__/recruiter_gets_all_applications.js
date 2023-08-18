const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;
chai.use(chaiHttp);

describe('Applications API', () => {
  it('should return job applications for a recruiter', (done) => {
    const recruiterUser = { _id: 'recruiter123', type: 'recruiter' };

    chai.request(app)
      .get('/applications')
      .set('Authorization', 'Bearer ' + generateToken(recruiterUser)) // Replace with your token generation logic
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        // Add more assertions based on your application's response structure
        done();
      });
  });

  it('should return job applications for a regular user', (done) => {
    const regularUser = { _id: 'user123', type: 'user' };

    chai.request(app)
      .get('/applications')
      .set('Authorization', 'Bearer ' + generateToken(regularUser)) // Replace with your token generation logic
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        // Add more assertions based on your application's response structure
        done();
      });
  });

  // Add more test cases to cover other scenarios (e.g., invalid token, no applications found, etc.)
});
