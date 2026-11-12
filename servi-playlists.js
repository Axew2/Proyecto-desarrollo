class splaylists
{
    constructor(repoplaylistsls)
    {
        this.repoplaylistsls = repoplaylistsls;
    }

    async listaplay()
    {
        const playlist = await this.repoplaylistsls.listar();
        return playlist;
    }

    async crearplay(playlists)
    {
        if(playlists.titulo.trim() === '')
        {
            throw new Error("La playlist debe tener un nombre.");
        }
        const playc = await this.repoplaylistsls.crear(playlists);
        return playc;
    }

    async editarplay(actualizarplay)
    {
        if(actualizarplay.titulo.trim() === '')
        {
            throw new Error("La playlist debe tener un nombre.");
        }

        const playe = await this.repoplaylistsls.editar(actualizarplay);
        return playe;
    }

    async eliminarplay(id)
    {
        return await this.repoplaylistsls.eliminar(id);
    }
}