const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true, trim: true },
    
    correo: { type: String, required: true, trim: true, 
        // Esto hace que todas se vuelvan minúsculas.
        lowercase: true, 
        // Que no puedan haber 2 correso iguales.
        unique: true },

    passwordHash: { type:String, required: true },
});

const Usuario = mongoose.model("Usuario", usuarioSchema);

module.exports = Usuario;