// servidor/controladores/lojistaControlador.js

const dbPool = require('../bd'); 

const buscarTodosOsLojistas = async (req, res) => {
  try {
    const query = `
      SELECT 
        l.id, 
        l.usuario_lojista, 
        s.nome_loja,
        s.logo_url
      FROM 
        lojistas AS l
      INNER JOIN 
        lojas AS s ON l.id = s.lojista_id;
    `;

    const [lojistas] = await dbPool.query(query);
    
    res.status(200).json(lojistas);

  } catch (error) {
    console.error('Erro ao buscar lojistas:', error);
    res.status(500).json({ mensagem: 'Erro no servidor ao buscar lojistas.' });
  }
};

module.exports = {
  buscarTodosOsLojistas
};