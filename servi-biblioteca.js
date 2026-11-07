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
    async cestcancion(id)
    {
        const canciones = await this.listabiblioteca();

        for(let i = 0; i < canciones.length; i++)
        {
            if(canciones[i].id === id)
            {
                if(canciones[i].activo === false)
                {
                    canciones[i].activo = true;
                }
                else
                {
                    canciones[i].activo = false;
                }

                return await this.edbiblioteca(canciones[i]);
            }
        }

        throw new Error("Canción no encontrada.");
    }
    async elbiblioteca(id)
    {
        return await this.repobibliotecals.eliminar(id);
    }
}