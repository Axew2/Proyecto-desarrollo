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
}