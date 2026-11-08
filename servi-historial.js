class shistorial
{
    constructor(repohistorialls)
    {
        this.repohistorialls = repohistorialls;
    }

    async listahistorial()
    {
        return await this.repohistorialls.listar();
    }

    async registrarreproduccion(cancion)
    {
        if(!cancion || !cancion.id)
        {
            throw new Error("Canción no válida.");
        }

        const reproduccion = {
            id: Date.now().toString(),
            cancionId: cancion.id,
            titulo: cancion.titulo,
            artista: cancion.artista,
            album: cancion.album,
            fecha: new Date().toISOString()
        };

        return await this.repohistorialls.crear(reproduccion);
    }
}