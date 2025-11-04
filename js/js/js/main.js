// ==========================
// SCRIPT PRINCIPAL DA PLATAFORMA ONG
// ==========================

// MENU MOBILE
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

// CARREGAMENTO SPA (Single Page Application)
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const page = link.getAttribute("href");
    carregarPagina(page);
  });
});
