// src/test/app.test.js
const request = require('supertest');
const app = require('../index'); // Assumindo que index.js exporta o app

describe('Testando a rota GET /', () => {
  it('Deve retornar "Alterei nas configurações do render o auto deploy Novamente"', async () => { // Nome do teste atualizado
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    // ATENÇÃO: Altere a string esperada abaixo
    expect(res.text).toEqual('Alterei nas configurações do render o auto deploy');
  });
});
