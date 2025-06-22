document.addEventListener("DOMContentLoaded", function () {
  // Seleciona os elementos que terão a animação
  const elementsToReveal = document.querySelectorAll(
    ".purpose, .pricing, .clients, .accordion__container, .hero__text, .hero__images, .features, .skills__description, .pricing__card, .clients__testimonial, .accordion__options, .chess__card, .chess__image-container, .accordion__content, .accordion__btn, .footer, .accordion__description, .accordion__answer"
  );

  // Configuração do Intersection Observer
  const observerOptions = {
    root: null,
    threshold: 0.15,
  };

  // Variáveis de controle de scroll
  let lastScrollY = window.scrollY;
  let isScrollingDown = true;

  // Detecta a direção do scroll
  window.addEventListener(
    "scroll",
    () => {
      const currentScrollY = window.scrollY;
      isScrollingDown = currentScrollY > lastScrollY;
      lastScrollY = currentScrollY;
    },
    { passive: true }
  );

  // Função de animação
  const handleAnimation = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (isScrollingDown) {
          entry.target.classList.remove("visible");
          void entry.target.offsetWidth; // Força reflow
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.add("visible");
        }
      } else {
        entry.target.classList.remove("visible");
      }
    });
  };

  // Cria o observer
  const observer = new IntersectionObserver(handleAnimation, observerOptions);

  // Adiciona classe reveal e observa os elementos
  elementsToReveal.forEach((element) => {
    if (!element.classList.contains("reveal")) {
      element.classList.add("reveal");
    }
    observer.observe(element);
  });
});
