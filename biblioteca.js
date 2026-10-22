const botonSola = document.querySelector("#boton-sola");
const botonSolaFav = document.querySelector("#boton-sola-favorito");

botonSola.addEventListener("click", function(){

    if (botonSola.textContent === "Marcar como escuchada"){
        botonSola.textContent = "Quitar de escuchadas";
    }
    else{
        botonSola.textContent = "Marcar como escuchada";
    }

});

botonSolaFav.addEventListener("click", function(){

    if (botonSolaFav.textContent === "Agregar a favoritos"){
        botonSolaFav.textContent = "Quitar de favoritos";
    }
    else{
        botonSolaFav.textContent = "Agregar a favoritos";
    }

});


const botonFromTheStart = document.querySelector("#boton-from-the-start");
const botonFromTheStartFav = document.querySelector("#boton-from-the-start-favorito");

botonFromTheStartFav.addEventListener("click", function(){

    if (botonFromTheStartFav.textContent === "Agregar a favoritos"){
        botonFromTheStartFav.textContent = "Quitar de favoritos";
    }
    else{
        botonFromTheStartFav.textContent = "Agregar a favoritos";
    }

});

botonFromTheStart.addEventListener("click", function(){

    if (botonFromTheStart.textContent === "Marcar como escuchada"){
        botonFromTheStart.textContent = "Quitar de escuchadas";
    }
    else{
        botonFromTheStart.textContent = "Marcar como escuchada";
    }

});


const botonManiac = document.querySelector("#boton-maniac");
const botonManiacFav = document.querySelector("#boton-maniac-favorito");

botonManiacFav.addEventListener("click", function(){
    if(botonManiacFav.textContent === "Agregar a favoritos"){
        botonManiacFav.textContent = "Quitar de favoritos";
    }
    else{
        botonManiacFav.textContent = "Agregar a favoritos";
    }
});

botonManiac.addEventListener("click", function(){
    if(botonManiac.textContent === "Marcar como escuchada"){
        botonManiac.textContent = "Quitar de escuchadas";
    }
    else{
        botonManiac.textContent = "Marcar como escuchada";
    }
});