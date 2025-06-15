// src/test/app.test.js
const request = require('supertest');
const app = require('../index'); // Caminho relativo correto para src/index.js

describe('Testando a rota GET /', () => {
  it('Deve retornar "Olá do meu aplicativo CI/CD!"', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('Olá do meu aplicativo CI/CD!');
  });
});
