const request = require('supertest');
const { app, server } = require('../app');

describe('Integration tests', () => {
  afterAll(() => {
    server.close();
  });

  test('should save user data to the database', async () => {
    const response = await request(app)
      .post('/submit')
      .send({
        name: 'John',
        lastname: 'Doe',
        cedula: '123456',
        phone: '555-5555'
      });
    expect(response.body.status).toBe('success');
    expect(response.body.message).toBe('Data saved!');
  });
});
