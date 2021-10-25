const menu = document.querySelector(".nav-menu");
const menuToggle = document.querySelector(".nav-toggle");
const links = document.querySelectorAll(".nav-link");
const header = document.querySelector(".header");

menuToggle.addEventListener("click", () => {
   menu.classList.toggle("active");
});

links.forEach((link) => {
   link.addEventListener("click", () => {
      menu.classList.remove("active");
   });
});

window.addEventListener("scroll", () => {
   if (this.scrollY >= 500) {
      header.classList.add("solid");
   } else {
      header.classList.remove("solid");
   }
});
