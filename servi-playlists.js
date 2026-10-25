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
        const playc = await this.repoplaylistsls.crear(playlists);
        return playc;
    }

    async editarplay(actualizarplay)
    {
        const playe = await this.repoplaylistsls.editar(actualizarplay);
        return playe;
    }

    async eliminarplay(id)
    {
        return await this.repoplaylistsls.eliminar(id);
    }
}