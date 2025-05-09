const menuBtn = document.querySelector(".menu__btn");
const menuBurger = document.querySelector(".header__menu-list");

menuBtn.addEventListener("click", () => {
  menuBurger.classList.toggle("menu--open");
});

const swiperOne = new Swiper(".feedback__slider", {
  loop: false,

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});

const swiperTwo = new Swiper(".certificates__slider", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    460: {
      slidesPerView: 2,
    },
    360: {
      slidesPerView: 1,
    },
  },
});

const accordion = document.querySelector(".accordion");
const accordionTitles = accordion.querySelectorAll(".accordion__title");

accordionTitles.forEach.call(accordionTitles, function (accordionTitle) {
  accordionTitle.addEventListener("click", function () {
    const currentText =
      accordionTitle.parentElement.querySelector(".accordion__text");

    accordionTitle.classList.toggle("accordion__title--active");
    currentText.classList.toggle("accordion__text--visible");

    if (currentText.classList.contains("accordion__text--visible")) {
      currentText.style.maxHeight = currentText.scrollHeight + "px";
    } else {
      currentText.style.maxHeight = null;
    }
  });
});
