const botonSola = document.querySelector("#boton-sola");

botonSola.addEventListener("click", function(){

    if (botonSola.textContent === "Marcar como escuchada"){
        botonSola.textContent = "Escuchada";
    }
    else{
        botonSola.textContent = "Marcar como escuchada";
    }

});

