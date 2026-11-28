// Servicio común también, se encarga de realizar las acciones básicas encargándose de que cada una sea válida y enviando los respectivos códigos de errores.

class splaylists
{
    constructor(repouserplay)
    {
        this.repouserplay = repouserplay;
    }

    async listar(usuarioId)
    {
        const playlists = await this.repouserplay.lpusuario(usuarioId);
        return playlists;
    }

    async buscar(id, usuarioId)
    {
        const playlist = await this.repouserplay.bpidusuario(id, usuarioId);

        if (!playlist)
        {
            const error = new Error("Playlist no encontrada.");
            error.status = 404;
            throw error;
        }
        return playlist;
    }

    async crear(titulo, canciones, usuarioId)
    {
        if (typeof titulo !== "string" || !titulo.trim())
        {
            const error = new Error("El título es obligatorio.");
            error.status = 400;
            throw error;
        }

        const listcanciones = canciones === undefined ? [] : canciones;

        if (!Array.isArray(listcanciones) || listcanciones.some(cancion => typeof cancion !== "string"))
        {
            const error = new Error("Las canciones deben ser una lista de identificadores.");
            error.status = 400;
            throw error;
        }

        const playlist = await this.repouserplay.crear( titulo.trim(), listcanciones, usuarioId );
        return playlist;
    }
    async editar(id, usuarioId, cambios)
    {
        if (!cambios || typeof cambios !== "object" || Array.isArray(cambios))
        {
            const error = new Error("Los datos de edición no son válidos.");
            error.status = 400;
            throw error;
        }

        if (Object.keys(cambios).length === 0 || Object.keys(cambios).some(campo => campo !== "titulo" && campo !== "canciones"))
        {
            const error = new Error("No hay cambios válidos para realizar.");
            error.status = 400;
            throw error;
        }

        if (cambios.titulo !== undefined && (typeof cambios.titulo !== "string" || !cambios.titulo.trim()))
        {
            const error = new Error("El título no es válido.");
            error.status = 400;
            throw error;
        }

        if (cambios.canciones !== undefined && (!Array.isArray(cambios.canciones) || cambios.canciones.some(cancion => typeof cancion !== "string")))
        {
            const error = new Error("Las canciones deben ser una lista de identificadores.");
            error.status = 400;
            throw error;
        }

        const actualizaciones = {};
        if (cambios.titulo !== undefined)
        {
            actualizaciones.titulo = cambios.titulo.trim();
        }

        if (cambios.canciones !== undefined)
        {
            actualizaciones.canciones = cambios.canciones;
        }

        const playlist = await this.repouserplay.editar( id, usuarioId, actualizaciones );

        if (!playlist)
        {
            const error = new Error("Playlist no encontrada.");
            error.status = 404;
            throw error;
        }

        return playlist;
    }

    async eliminar(id, usuarioId)
    {
        const playlist = await this.repouserplay.eliminar(id, usuarioId);
        if (!playlist)
        {
            const error = new Error("Playlist no encontrada.");
            error.status = 404;
            throw error;
        }
        return playlist;
    }
}

module.exports = splaylists;