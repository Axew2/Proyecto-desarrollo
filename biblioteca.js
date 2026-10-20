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

    if (botonFromTheStart.textContent === "Marcar como escuchada"){
        botonFromTheStart.textContent = "Escuchada";
    }
    else{
        botonFromTheStart.textContent = "Marcar como escuchada";
    }

});

const botonManiac = document.querySelector("#boton-maniac");

botonManiac.addEventListener("click", function(){
    if(botonManiac.textContent === "Marcar como escuchada"){
        botonManiac.textContent = "Escuchada";
    }
    else{
        botonManiac.textContent = "Marcar como escuchada";
    }
});