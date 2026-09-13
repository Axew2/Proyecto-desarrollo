const infoHector = document.querySelector("#info-hector");
const botonHector = document.querySelector("#boton-hector");

botonHector.addEventListener("click", function() {
    if (infoHector.hidden) {
        infoHector.hidden = false;
        botonHector.textContent = "Ocultar Perfil";
    } else {
        infoHector.hidden = true;
        botonHector.textContent = "Mostrar Perfil";
    }
});

const infoLaufey = document.querySelector("#info-laufey");
const botonLaufey = document.querySelector("#boton-laufey");

botonLaufey.addEventListener("click", function() {
    if (infoLaufey.hidden) {
        infoLaufey.hidden = false; 
        botonLaufey.textContent = "Ocultar Perfil";
    } else {
        infoLaufey.hidden = true; 
        botonLaufey.textContent = "Mostrar Perfil";
    }
});

const info4Fantastico = document.querySelector("#info-4fantasticos");
const boton4Fantastico = document.querySelector("#boton-4fantasticos"); 

boton4Fantastico.addEventListener("click", function() {
    if (info4Fantastico.hidden) {
        info4Fantastico.hidden = false; 
        boton4Fantastico.textContent = "Ocultar Perfil";
    } else {
        info4Fantastico.hidden = true; 
        boton4Fantastico.textContent = "Mostrar Perfil";
    }
});

