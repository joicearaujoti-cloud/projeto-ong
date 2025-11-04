// ==========================
// SISTEMA DE SPA BASICO
// ==========================

const conteudoPrincipal = document.querySelector("main");

async function carregarPagina(pagina) {
  try {
    const resposta = await fetch(pagina);
    const html = await resposta.text();
    conteudoPrincipal.innerHTML = html;
    window.history.pushState({}, "", pagina);
  } catch (erro) {
    conteudoPrincipal.innerHTML = "<h2>Erro ao carregar conteudo.</h2>";
  }
}

// Suporte ao botao de voltar/avancar do navegador
window.addEventListener("popstate", () => {
  carregarPagina(window.location.pathname);
});
