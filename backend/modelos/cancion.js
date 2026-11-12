const mongoose = require("mongoose");

const cancionSchema = new mongoose.Schema({
    titulo: { type: String, required: true, trim: true },

    artista: { type:String, required: true, trim: true },

    album: { type:String, trim: true },

    duracion: { type:String },

    portada: { type:String },

    audio: { type:String },

    activo: { type:Boolean, default: true },

    favorita: { type:Boolean, default: false },

    escuchada: { type:Boolean, default: false },
});

const Cancion = mongoose.model("Cancion", cancionSchema);

module.exports = Cancion;