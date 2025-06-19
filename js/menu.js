const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("nav-mobile");
const header = document.getElementById("header");

// Adiciona o evento de clique ao botão do menu
menuButton.addEventListener("click", () => {
  // Alterna a classe 'open' no menu para mostrá-lo ou escondê-lo
  mobileMenu.classList.toggle("open");

  // Alterna a classe 'menu-open' no header para animar o ícone
  header.classList.toggle("menu-open");
});
