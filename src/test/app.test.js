const request = require('supertest');
const app = require('../index');

describe('Testando a rota GET /', () => {
  it('Deve retornar "Altere nas configurações do render o auto deploy"', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('Altere nas configurações do render o auto deploy');
  });
});
