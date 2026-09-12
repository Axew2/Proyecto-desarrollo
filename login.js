const contrasenia = document.querySelector("#password");
const botonMostrar = document.createElement("button");

botonMostrar.type = "button";
botonMostrar.className = "Boton-mostrar";
botonMostrar.textContent = "Mostrar Contraseña";

contrasenia.after(botonMostrar);

botonMostrar.addEventListener("click", function(){
    
    if (contrasenia.type === "password"){
    contrasenia.type = "text"; 
    botonMostrar.textContent = "Ocultar Contraseña";
    } 
    else{
    contrasenia.type = "password";}
    botonMostrar.textContent = "Mostrar Contraseña";
    
    }
);
