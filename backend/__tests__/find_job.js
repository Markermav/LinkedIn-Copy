const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;
chai.use(chaiHttp);

describe('Job Application API', () => {
  it('should successfully apply for a job when conditions are met', (done) => {
    const user = { _id: 'user123' };
    const job = { _id: 'job123', userId: 'recruiter123', maxApplicants: 5 };
    const data = { sop: 'My Statement of Purpose' };

    chai.request(app)
      .post('/apply')
      .send({ user, job, data })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('message').to.equal('Job application successful');
        done();
      });
  });

  it('should return an error when job does not exist', (done) => {
    const user = { _id: 'user123' };
    const job = { _id: 'invalidJobId', userId: 'recruiter123', maxApplicants: 5 };
    const data = { sop: 'My Statement of Purpose' };

    chai.request(app)
      .post('/apply')
      .send({ user, job, data })
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.have.property('message').to.equal('Job does not exist');
        done();
      });
  });

  it('should return an error when user has already applied for the job', (done) => {
    const user = { _id: 'user123' };
    const job = { _id: 'job123', userId: 'recruiter123', maxApplicants: 5 };
    const data = { sop: 'My Statement of Purpose' };

    chai.request(app)
      .post('/apply')
      .send({ user, job, data })
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.have.property('message').to.equal('You have already applied for this job');
        done();
      });
  });

  // Add more test cases to cover other scenarios (e.g., application limit reached, already accepted job, etc.)
});
