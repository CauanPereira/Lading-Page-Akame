const swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    reverseDirection: true, 
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-prev", // Botão de avançar
    prevEl: ".swiper-button-next",// Botão de voltar
  },
  breakpoints: {

    260: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    290: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    500: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    600: {
      slidesPerView: 2,
      spaceBetween: 30,
      
    }
  },
});