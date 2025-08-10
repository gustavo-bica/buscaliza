// lojistaControlador.js
const dbPool = require('../bd/bd'); 

const buscarTodosOsLojistas = async (req, res) => {
  try {
    // Corrigido para buscar na tabela 'lojistas' e selecionar os campos corretos
    const [lojistas] = await dbPool.query('SELECT id, usuario_lojista, nome_loja FROM lojistas');
    
    res.status(200).json(lojistas);

  } catch (error) {
    console.error('Erro ao buscar lojistas:', error);
    res.status(500).json({ mensagem: 'Erro no servidor ao buscar lojistas.' });
  }
};

// Corrigido para exportar a função com o nome certo
module.exports = {
  buscarTodosOsLojistas
};
