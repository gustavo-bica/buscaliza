// servidor/bd.js

const mysql = require('mysql2/promise');

// Cria um "pool" de conexões. É mais eficiente que criar uma nova conexão a cada consulta.
const pool = mysql.createPool({
  host: process.env.BD_HOST || 'localhost',       // Para MySQL local
  user: process.env.BD_USER || 'root',            // Usuário padrão do MySQL
  password: process.env.BD_PASSWORD || '',        // Senha do seu MySQL local
  database: process.env.BD_DATABASE || 'buscaliza_bd', // Nome do banco
  port: process.env.BD_PORT || 3306,              // Porta padrão do MySQL
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

console.log('Pool de conexões com o MySQL criado com sucesso!');

module.exports = pool;