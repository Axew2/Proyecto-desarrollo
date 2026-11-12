const mongoose = require("mongoose");

const historialSchema = new mongoose.Schema({
    cancionId: { type: String, required: true },
    
    titulo: { type: String, required: true, trim: true },

    artista: { type:String, required: true, trim: true },

    album: { type:String, trim: true },

    fecha: {  type:Date, default: Date.now },

    // Reutilizo lo que usé en playlist.
    usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true }

});

const Historial = mongoose.model("Historial", historialSchema);

module.exports = Historial;