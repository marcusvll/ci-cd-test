// src/index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  console.log('Requisição GET / recebida.');
  res.send('Alterando nas configurações do render o auto deploy - 2');
});

app.use((err, req, res, next) => {
    console.error('Erro não tratado na aplicação Aqui:', err.stack);
    res.status(500).send('Algo deu errado');
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Servidor Node.js rodando em http://localhost:${port}`);
  }).on('error', (err) => {
    console.error('Erro ao iniciar o servidor Node.js:', err.message);
  });
} else {
    console.log('Aplicação Node.js em modo de teste, não iniciando listener HTTP.');
}

process.on('exit', (code) => {
    console.log(`Processo Node.js encerrando com código: ${code}`);
});
process.on('uncaughtException', (err) => {
    console.error('Exceção não tratada:', err);
    process.exit(1);
});
process.on('unhandledRejection', (reason, promise) => {
    console.error('Rejeição de Promise não tratada:', reason, promise);
});

module.exports = app;
