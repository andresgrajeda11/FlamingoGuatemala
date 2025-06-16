import hamburgerMenu from "/js/menu-hamburguesa.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
})

d.addEventListener("keydown", (e)=> {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
});

/*
d.addEventListener("keyup", (e)=> {
    shortcuts(e);
});

d.addEventListener("keypress", (e)=> {
    shortcuts(e);
})*/
 
