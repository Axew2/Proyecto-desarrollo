class sbiblioteca
{
    constructor(repobibliotecals)
    {
        this.repobibliotecals = repobibliotecals;
    }
    async listabiblioteca()
    {
        return await this.repobibliotecals.listar();
    }
    async cbiblioteca(cancion)
    {
        return await this.repobibliotecals.crear(cancion);
    }
    async edbiblioteca(cancion)
    {
        return await this.repobibliotecals.editar(cancion);
    }
    async elbiblioteca(id)
    {
        return await this.repobibliotecals.eliminar(id);
    }
}