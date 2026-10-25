class sartistas
{
    constructor(repoartistasls)
    {
        this.repoartistasls = repoartistasls;
    }

    async listaartistas()
    {
        const artistas = await this.repoartistasls.listar();
        return artistas;
    }

    async crearartista(artista)
    {
        if(artista.id === undefined || artista.id === null || artista.id === ""){
            artista.id = Date.now().toString();
        }
        const artistasc = await this.repoartistasls.crear(artista);
        return artistasc;
    }

    async editarartista(actualizarart)
    {
        const artistase = await this.repoartistasls.editar(actualizarart);
        return artistase;
    }

    async eliminarartista(id)
    {
        await this.repoartistasls.eliminar(id);
    }
}