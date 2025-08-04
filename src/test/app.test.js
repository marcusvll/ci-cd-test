const request = require('supertest');
const app = require('../index');

describe('Testando a rota GET /', () => {
  it('Deve retornar "Alterando nas configurações do render o auto deploy - 2"', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('Alterando nas configurações do render o auto deploy - 2');
  });
});
