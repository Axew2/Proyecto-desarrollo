// Servicio bastante deducible, se asegura de verificar que todos los datos cumplan con los estándares, si no lo hace, se le da
// una alerta de su respectivo error, cuando termina de verificar, efectua la acción. (dea, efectua la acción, ese lenguaje técnico).
class shistorial
{
    constructor(repohistorial)
    {
        this.repohistorial = repohistorial;
    }

    async registrar(cancionId, titulo, artista, album, usuarioId)
    {
        if ( typeof cancionId !== "string" || typeof titulo !== "string" || typeof artista !== "string" || !cancionId.trim() || !titulo.trim() || !artista.trim()
        )
        {
            const error = new Error("Los datos de la reproducción son obligatorios.");
            error.status = 400;
            throw error;
        }
        if (album !== undefined && album !== null && typeof album !== "string")
        {
            const error = new Error("El álbum debe ser un texto válido.");
            error.status = 400;
            throw error;
        }
        if (!usuarioId)
        {
            const error = new Error("Usuario no autenticado.");
            error.status = 401;
            throw error;
        }
        const reproduccion = await this.repohistorial.registrar( cancionId.trim(), titulo.trim(), artista.trim(), album, usuarioId );
        return reproduccion;
    }
    async listar(usuarioId)
    {
        if (!usuarioId)
        {
            const error = new Error("Usuario no autenticado.");
            error.status = 401;
            throw error;
        }
        const historial = await this.repohistorial.lpusuario(usuarioId);
        return historial;
    }
}
module.exports = shistorial;
