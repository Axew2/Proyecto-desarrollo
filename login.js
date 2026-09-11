const contrasenia = document.querySelector("#password");
const botonMostrar = document.createElement("button");

botonMostrar.type = "button";
botonMostrar.textContent = "Mostrar Contraseña";

contrasenia.after(botonMostrar);

botonMostrar.addEventListener("click", function(event){
    
    if (contrasenia.type === "password"){
    contrasenia.type = "text"; 
    } 
    else{
    contrasenia.type = "password";
    }
});
