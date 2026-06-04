const request = require('supertest');
const app = require('./app');

describe('App Tests', () => {
  test('health endpoint returns OK', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('OK');
  });
});