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
    async cambiarestartista(id)
    {
        const artistas = await this.repoartistasls.listar();

        for(let i = 0; i < artistas.length; i++)
        {
            if(artistas[i].id === id)
            {
                if(artistas[i].activo === false)
                {
                    artistas[i].activo = true;
                }
                else
                {
                    artistas[i].activo = false;
                }

                await this.repoartistasls.editar(artistas[i]);
                return artistas[i];
            }
        }
    }
}