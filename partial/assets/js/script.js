//Codigo del Preloader

window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    preloader.classList.add("hidden"); // Oculta el preloader al cargar la página
});

function initNavbarEffect() {
    const navbar = document.querySelector(".navbar");
    const logo = document.querySelector(".logo");
    if (!navbar) {
        setTimeout(initNavbarEffect, 100); // Reintenta en 100ms si no encuentra el navbar
        return;
    }

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
            logo.classList.add("drop");
        } else {
            navbar.classList.remove("scrolled");
            logo.classList.remove("drop");
        }
    });
}

// Iniciar la función después de que el DOM se haya cargado
document.addEventListener("DOMContentLoaded", initNavbarEffect);

function toggleMenu() {
    const menu = document.querySelector(".nav-links");
    menu.classList.toggle("show");
}
//Código JavaScript para activar animaciones 
document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const animClass = entry.target.dataset.anim; // Leer la animación desde data-anim

                if (entry.isIntersecting) {
                    entry.target.classList.add(animClass); // Agregar la animación correspondiente
                } else {
                    entry.target.classList.remove(animClass); // Quitar animación al salir
                }
            });
        },
        { threshold: 0.2 }
    );

    animatedElements.forEach((el) => observer.observe(el));
});

