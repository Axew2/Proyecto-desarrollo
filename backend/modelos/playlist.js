const mongoose = require("mongoose");

const playlistSchema = new mongoose.Schema({
    titulo: { type: String, required: true, trim: true },

    canciones: { type:[String], 
        // Esto permite que si yo quiero crear una playlist, al momento de completarse pueda estár vacía.
        default: [] },

   usuarioId: { 
    // Siginifica que esto lo q va a guardar es un identificador de mongodb.
    type: mongoose.Schema.Types.ObjectId,
    // El identificador solo es de un usuario que siga el modelo usuario.
    ref: "Usuario", required: true } 
});

const Playlist = mongoose.model("Playlist", playlistSchema);

module.exports = Playlist;