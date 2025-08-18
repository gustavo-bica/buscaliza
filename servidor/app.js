// servidor/app.js

// Forma longa e equivalente
// const dotenv = require('dotenv');
// dotenv.config();

require('dotenv').config();
const express = require('express');
const path = require('path');

const lojistasRotas = require('./rotas/lojistas'); // vai até /rotas/lojistas e executa até o fim

const bdPool = require('./bd');

const app = express();
const PORTA = process.env.PORTA || 3000;

app.use(express.static(path.join(__dirname, 'publico')));

app.use('/api/lojistas', lojistasRotas);

app.listen(PORTA, () => {
  console.log(`Servidor rodando na porta ${PORTA}`);
});
