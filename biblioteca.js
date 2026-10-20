const botonSola = document.querySelector("#boton-sola");

botonSola.addEventListener("click", function(){

    if (botonSola.textContent === "Agregar a favoritos"){
        botonSola.textContent = "Quitar de favoritos";
    }
    else{
        botonSola.textContent = "Agregar a favoritos";
    }

});

const botonFromTheStart = document.querySelector("#boton-from-the-start");

botonFromTheStart.addEventListener("click", function(){

    if (botonFromTheStart.textContent === "Agregar a favoritos"){
        botonFromTheStart.textContent = "Quitar de favoritos";
    }
    else{
        botonFromTheStart.textContent = "Agregar a favoritos";
    }

});

const botonManiac = document.querySelector("#boton-maniac");

botonManiac.addEventListener("click", function(){
    if(botonManiac.textContent === "Agregar a favoritos"){
        botonManiac.textContent = "Quitar de favoritos";
    }
    else{
        botonManiac.textContent = "Agregar a favoritos";
    }
});