const openBtn = document.querySelector(".mobile-menu-open-btn");
const closeBtn = document.querySelector(".mobile-menu-close-btn");
const mobileMenu = document.querySelector(".mobile-menu-wrapper");

openBtn.addEventListener("click", () => {
  mobileMenu.classList.add("is-open");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("is-open");
});

const openModalBtn = document.querySelector(".hero-button");
const closeModalBtn = document.querySelector(".modal-btn-close");
const modal = document.querySelector(".backdrop");

openModalBtn.addEventListener("click", () => {
  modal.classList.add("is-open");
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("is-open");
});
