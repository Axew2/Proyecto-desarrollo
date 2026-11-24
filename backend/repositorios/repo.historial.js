const Historial = require("../modelos/historial.js");

// Repo mucho mas facil de entender, únicamente suelen registrar el historial de reproducciones y 
// listan el historial según el id del usuario en base a un método sort de la fecha y el -1 significa ordenarlo de manera descendente.
class repohistorial
{
    async registrar(cancionId, titulo, artista, album, usuarioId)
    {
        const reproduccion = await Historial.create({ cancionId: cancionId, titulo: titulo, artista: artista, album: album, usuarioId: usuarioId });
        return reproduccion;
    }
    async lpusuario(usuarioId)
    {
        const historial = await Historial.find({ usuarioId: usuarioId }).sort({ fecha: -1 });

        return historial;
    }
}
module.exports = repohistorial;
