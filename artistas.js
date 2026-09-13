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

const inputBusqueda = document.querySelector(".Buscar");
const botonBusqueda = document.querySelector(".Boton-buscar");
const artistas = document.querySelectorAll("#repertorio-de-artistas article");

botonBusqueda.addEventListener("click", function() {
    const terminoBusqueda = inputBusqueda.value.trim().toLowerCase();
    artistas.forEach(function(artista) {
        const nombreArtista = artista.querySelector("h3").textContent.toLowerCase();
        if (nombreArtista.includes(terminoBusqueda)) {
            artista.style.display = "block";
        } else {
            artista.style.display = "none";
        }
    });
});
