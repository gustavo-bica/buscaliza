// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Espera o conteúdo da página carregar completamente antes de executar o script

  const lojasContainer = document.getElementById("lojas-container");

  async function carregarLojas() {
    try {
      // Faz a requisição para a nossa API (o back-end busca no banco)
      const response = await fetch("/api/lojistas");
      if (!response.ok) throw new Error("Falha na rede");

      const lojistas = await response.json();
      /* console.log('DADOS RECEBIDOS DA API:', lojistas); */

      lojasContainer.innerHTML = "";

      if (lojistas.length === 0) {
        lojasContainer.innerHTML = "<p>Nenhuma loja encontrada.</p>";
        return;
      }

      // Para cada lojista, cria um card HTML
      lojistas.forEach((lojista) => {
        const card = document.createElement("div");
        card.className = "loja-card";

        const status = "Fechada"; // Exemplo
        const statusClass = status.toLowerCase(); // 'fechada' ou 'aberta'

        // Verifica se tem logo_url, se não tem, exibe a primeira letra
        let logoElement;
        if (lojista.logo_url) {
          logoElement = `<img src="${lojista.logo_url}" alt="Logo da ${lojista.nome_loja}" class="loja-logo">`;
        } else {
          logoElement = `<div class="loja-logo loja-letra">${lojista.nome_loja.charAt(0).toUpperCase()}</div>`;
        }

        card.innerHTML = `
                    ${logoElement}
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

  // Configuração do menu
  const menuBtn = document.querySelector(".menu-icon");
  const menuOverlay = document.getElementById("menuOverlay");
  const fecharMenuBtn = document.getElementById("fecharMenu");

  if (menuBtn && menuOverlay) {
    // ABRIR MENU - ao clicar no ícone
    menuBtn.addEventListener("click", () => {
      menuOverlay.classList.add("ativo");
    });

    // FECHAR MENU - ao clicar fora dos cards
    menuOverlay.addEventListener("click", (e) => {
      if (e.target === menuOverlay) {
        menuOverlay.classList.remove("ativo");
      }
    });

    // FECHAR MENU - ao clicar no botão X
    if (fecharMenuBtn) {
      fecharMenuBtn.addEventListener("click", () => {
        menuOverlay.classList.remove("ativo");
      });
    }
  }

  carregarLojas();
});
