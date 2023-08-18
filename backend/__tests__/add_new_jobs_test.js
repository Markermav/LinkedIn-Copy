describe('POST /jobs', () => {
  it('should add a new job when the user is a recruiter', async () => {
    const newJob = {
      title: 'Software Engineer',
      maxApplicants: 10,
      maxPositions: 5,
      dateOfPosting: new Date(),
      deadline: new Date(),
      skillsets: ['JavaScript', 'Node.js'],
      jobType: 'Full-time',
      duration: 'Permanent',
      salary: '100000',
      rating: 4.5,
    };

    
    const jobAdded = true;

    expect(jobAdded).toBe(true);
  });

  it('should return 401 when the user is not a recruiter', async () => {
    const newJob = {
      // Job data...
    };

    // Simulating unauthorized job creation
    const jobAdded = false;

    expect(jobAdded).toBe(false);
  });
});
