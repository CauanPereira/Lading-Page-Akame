const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("nav-mobile");
const header = document.getElementById("header");

// Função para fechar o menu
function closeMenu() {
  mobileMenu.classList.remove("open");
  header.classList.remove("menu-open");
}

// Adiciona o evento de clique ao botão do menu
menuButton.addEventListener("click", () => {
  // Alterna a classe 'open' no menu para mostrá-lo ou escondê-lo
  mobileMenu.classList.toggle("open");

  // Alterna a classe 'menu-open' no header para animar o ícone
  header.classList.toggle("menu-open");
});

// Adiciona evento de clique em todas as opções do menu para fechar o menu
const menuItems = document.querySelectorAll(".nav__item");
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    closeMenu();
  });
});

// Adiciona evento de clique fora do menu para fechá-lo
document.addEventListener("click", (event) => {
  // Verifica se o menu está aberto
  if (mobileMenu.classList.contains("open")) {
    // Verifica se o clique não foi no menu ou no botão do menu
    if (
      !mobileMenu.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      closeMenu();
    }
  }
});

// Adiciona evento de clique nos botões do menu mobile para fechar o menu
const mobileButtons = mobileMenu.querySelectorAll(".button");
mobileButtons.forEach((button) => {
  button.addEventListener("click", () => {
    closeMenu();
  });
});
