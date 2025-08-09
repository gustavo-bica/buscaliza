const express = require('express');
const path = require('path');

const lojasRotas = require('./rotas/lojas');

const app = express();
const PORTA = process.env.PORTA || 3000;

// Servir arquivos estáticos da pasta 'publico'
app.use(express.static(path.join(__dirname, 'publico')));

// Rota de exemplo para testar
app.get('/api/teste', (req, res) => {
  res.json({ mensagem: 'API do Buscaliza funcionando!' });
});

app.use('/api/lojas', lojasRotas);

// A linha mais importante: mantém o servidor rodando
app.listen(PORTA, () => {
  console.log(`Servidor rodando na porta ${PORTA}`);
});