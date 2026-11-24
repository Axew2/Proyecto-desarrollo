const Playlist = require("../modelos/playlist.js");


// Funciona como un repositorio normal que se encarga de definir los métodos utilizados, listar por usuario, buscar por id usuario, crear, editar, eliminar.
class repoplaylists
{
    async lpusuario(usuarioId)
    {
        const playlists = await Playlist.find({ usuarioId: usuarioId });
        return playlists;
    }

    async bpidusuario(id, usuarioId)
    {
        const playlist = await Playlist.findOne({ _id: id, usuarioId: usuarioId });

        return playlist;
    }

    async crear(titulo, canciones, usuarioId)
    {
        const playlist = await Playlist.create({ titulo: titulo, canciones: canciones, usuarioId: usuarioId });
        return playlist;
    }
    async editar(id, usuarioId, cambios)
    {
        const playlist = await Playlist.findOneAndUpdate( { _id: id, usuarioId: usuarioId }, { $set: { titulo: cambios.titulo, canciones: cambios.canciones } }, { new: true, runValidators: true } );
        return playlist;
    }
    async eliminar(id, usuarioId)
    {
        const playlist = await Playlist.findOneAndDelete( { _id: id, usuarioId: usuarioId } );
        return playlist;
    }
}
module.exports = repoplaylists;
