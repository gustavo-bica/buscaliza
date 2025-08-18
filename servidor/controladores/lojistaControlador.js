// servidor/controladores/lojistaControlador.js

const dbPool = require('../bd'); 

const buscarTodosOsLojistas = async (req, res) => {
  try {
    const [lojistas] = await dbPool.query('SELECT id, usuario_lojista, nome_loja FROM lojistas');
    
    res.status(200).json(lojistas);

  } catch (error) {
    console.error('Erro ao buscar lojistas:', error);
    res.status(500).json({ mensagem: 'Erro no servidor ao buscar lojistas.' });
  }
};

module.exports = {
  buscarTodosOsLojistas
};
