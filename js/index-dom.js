

import hamburgerMenu from "./dom/menu-hamburguesa.js";
import { digitalClock, sonido } from "./dom/reloj.js";
import { moveBall, shortcuts } from "./dom/teclado.js";
//import  countdown from "./dom/cuenta_regresiva.js";
import scrollTopButton from "./dom/boton_scroll.js";
import darkTheme from "./dom/tema_oscuro.js";
//import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
//import networkStatus from "./dom/deteccion_red.js";
//import webCam from "./dom/deteccion_webcam.js";
//import getGeolocation from "./dom/geolocalizacion.js";
import searchFilters from "./dom/filtro_busquedas.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    sonido("/assets/Peter dancing.mp3", "#activar-sonido", "#desactivar-sonido");
    countdown("countdown", "May 28, 2025 23:00:00", "Keep learning bro");
    scrollTopButton(".scroll-top-btn");
    responsiveMedia("youtube", "(min-width: 1024px)", `<a href="https://www.youtube.com/watch?v=zXYa6roaxTE" target="_blank" rel="noopener">Ver Video</a>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/zXYa6roaxTE?si=sENm3GJQNNsubCmu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`);
    responsiveMedia("gmaps", "(min-width: 1024px)", `<a href="https://maps.app.goo.gl/xsAbTajUMCsTPR839" target="_blank" rel="noopener">Ver Mapa</a>`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.9077013683627!2d-3.185209023381676!3d51.47820847180677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e1cb1dfc6fd81%3A0x39e2d294964328e9!2sPrincipality%20Stadium!5e0!3m2!1sen!2sgt!4v1749010565023!5m2!1sen!2sgt" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>` );
    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
    webCam("webcam");
    getGeolocation("geolocation");
    searchFilters(".card-filter", ".card");
})

d.addEventListener("keydown", (e)=> {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");

networkStatus();

/*
d.addEventListener("keyup", (e)=> {
    shortcuts(e);
});

d.addEventListener("keypress", (e)=> {
    shortcuts(e);
})*/
 



/* Temas de repaso

matchMedia()
array destructuring
URLSearchParams()
rest params
local storage
eventos del BOM
windows match media
window resize
window load
window open
window close
appendchild
insertAdjacentElement
server side rendering
.tsx
docker
npm run build
react
vite
odoo
apis
shadcn 
v0z
next.js
api sets
bloquear IP
postman

*/ 

/* toca video 97*/ 