const header = document.querySelector("header");
const main_header = document.querySelector(".main_header");

window.addEventListener('scroll', () => {
    if (window.scrollY > 250) {
        main_header.classList.add('visible');
        main_header.classList.remove('invisible');
    } else {
        main_header.classList.add('invisible');
        main_header.classList.remove('visible');
    }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }
});

