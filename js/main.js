// Seleccionar Items DOM
const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.menu-nav');
const menuFoto = document.querySelector('.menu-foto');
const navItems = document.querySelectorAll('.nav-item');

// Establecer estado inicial del menu
let showMenu = false;

btnMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
    if ( !showMenu ) {
        btnMenu.classList.add('close');
        menu.classList.add('show');
        navMenu.classList.add('show');
        menuFoto.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        // Establecer el estado del menu
        showMenu = true;
    } else {
        btnMenu.classList.remove('close');
        menu.classList.remove('show');
        navMenu.classList.remove('show');
        menuFoto.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        // Establecer el estado del menu
        showMenu = false;
    }
}