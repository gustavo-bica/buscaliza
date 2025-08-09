// Este é um controlador de exemplo.
// A lógica real virá quando conectarmos ao banco de dados.

const buscarTodasAsLojas = (req, res) => {
  // Por enquanto, vamos retornar dados de exemplo (mock)
  const lojasExemplo = [
    { id: 1, nome: 'Loja do Bairro', endereco: 'Rua Principal, 123' },
    { id: 2, nome: 'Supermercado Central', endereco: 'Avenida do Centro, 456' }
  ];

  res.status(200).json(lojasExemplo);
};

// Exportamos a função para que a rota possa usá-la
module.exports = {
  buscarTodasAsLojas
};