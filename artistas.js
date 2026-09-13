const infoHector = document.querySelector("#info-hector");
const botonHector = document.querySelector("#boton-hector");

botonHector.addEventListener("click", function() {
    if (infoHector.hidden) {
        infoHector.hidden = false;
    } else {
        infoHector.hidden = true;
    }
});

const infoLaufey = document.querySelector("#info-laufey");
const botonLaufey = document.querySelector("#boton-laufey");

botonLaufey.addEventListener("click", function() {
    if (infoLaufey.hidden) {
        infoLaufey.hidden = false; 
    } else {
        infoLaufey.hidden = true; 
    }
});

const info4Fantastico = document.querySelector("#info-4fantasticos");
const boton4Fantastico = document.querySelector("#boton-4fantasticos"); 

boton4Fantastico.addEventListener("click", function() {
    if (info4Fantastico.hidden) {
        info4Fantastico.hidden = false; 
    } else {
        info4Fantastico.hidden = true; 
    }
});

