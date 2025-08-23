// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Espera o conteúdo da página carregar completamente antes de executar o script

  const lojasContainer = document.getElementById("lojas-container");

  async function carregarLojistas() {
    try {
      // Faz a requisição para a nossa API (o back-end busca no banco)
      const response = await fetch("/api/lojistas");
      if (!response.ok) throw new Error("Falha na rede");

      const lojistas = await response.json();

      lojasContainer.innerHTML = "";

      if (lojistas.length === 0) {
        lojasContainer.innerHTML = "<p>Nenhuma loja encontrada.</p>";
        return;
      }

      // Para cada lojista, cria um card HTML
      lojistas.forEach((lojista) => {
        const card = document.createElement("div");
        card.className = "loja-card";

        const logoUrl = `https://placehold.co/100x100/EFEFEF/333?text=${lojista.nome_loja.charAt(0)}`;
        const status = "Fechada"; // Exemplo
        const statusClass = status.toLowerCase(); // 'fechada' ou 'aberta'

        card.innerHTML = `
                    <img src="${logoUrl}" alt="Logo da ${lojista.nome_loja}" class="loja-logo">
                    <div class="loja-info">
                        <h2 class="loja-nome">${lojista.nome_loja}</h2>
                        <p class="loja-status ${statusClass}">${status}</p>
                    </div>
                `;

        lojasContainer.appendChild(card);
      });
    } catch (error) {
      console.error("Falha ao carregar lojas:", error);
      lojasContainer.innerHTML = "<p>Não foi possível carregar as lojas.</p>";
    }
  }

  carregarLojistas();
});
