// src/index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  console.log('Requisição GET / recebida.'); // Log de requisição
  res.send('Testando alterações para subir sem erro');
});

// --- NOVO: Tratamento de erros ---
app.use((err, req, res, next) => {
    console.error('Erro não tratado na aplicação:', err.stack);
    res.status(500).send('Algo deu errado!*');
});
// --- FIM NOVO ---

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Servidor Node.js rodando em http://localhost:${port}`);
  }).on('error', (err) => { // NOVO: Log de erro ao iniciar o servidor
    console.error('Erro ao iniciar o servidor Node.js:', err.message);
  });
} else {
    console.log('Aplicação Node.js em modo de teste, não iniciando listener HTTP.');
}

// NOVO: Log ao encerrar o processo
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
