class controlador
{
    constructor(sartistas)
    {
        this.sartistas = sartistas;
    }

    async listaartistas()
    {
        const artistas = await this.sartistas.listaartistas();
        return artistas;
    }
}