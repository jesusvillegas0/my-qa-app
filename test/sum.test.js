const request = require('supertest');
const { app, server } = require('../app'); // Importamos la app y el servidor

afterAll(() => {
  server.close(); // Cerramos el servidor después de que las pruebas terminan
});

describe('GET /status', () => {
  it('should return status ok', async () => {
    const res = await request(app).get('/status');
    expect(res.body.status).toBe('ok');
  });
});

describe('GET /sum', () => {
  it('should return sum of two numbers', async () => {
    const res = await request(app).get('/sum?a=1&b=2');
    expect(res.body.result).toBe(3);
  });
});
