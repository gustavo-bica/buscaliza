// servidor/app.js
require('dotenv').config();
const express = require('express');
const path = require('path');

// Corrigido para carregar o arquivo com o nome certo
const lojistasRotas = require('./rotas/lojistas'); 

const bdPool = require('./bd/bd');

const app = express();
const PORTA = process.env.PORTA || 3000;

app.use(express.static(path.join(__dirname, 'publico')));

// A URL aqui já estava correta, o problema era o arquivo importado
app.use('/api/lojistas', lojistasRotas);

app.listen(PORTA, () => {
  console.log(`Servidor rodando na porta ${PORTA}`);
});
