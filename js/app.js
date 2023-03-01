const menu = document.querySelector(".menu");
const abrirMenuBtn = document.querySelector(".abrir-menu");
const cerrarMenuBtn = document.querySelector(".cerrar-menu");

function togleMenu () {
    menu.classList.toggle("menu_opened");
}

abrirMenuBtn.addEventListener("click", togleMenu);
cerrarMenuBtn.addEventListener("click", togleMenu);

const menuLink = document.querySelectorAll('.menu a[href^="#"]')

menuLink.forEach(menuLink => {
    menuLink.addEventListener("click", function() {
    menu.classList.remove("menu_opened");})
})