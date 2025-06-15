// src/index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Olá do meu aplicativo CI/CD!');
});

// Apenas inicia o servidor se não estiver em ambiente de teste
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Servidor Node.js rodando em http://localhost:${port}`);
  });
}

module.exports = app; // Exporta 'app' para os testes
