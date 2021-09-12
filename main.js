const hamburgur = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelector(".links");

hamburgur.addEventListener("click", () => {
    navLinks.classList.toggle("open");
})