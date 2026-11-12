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
        if(!cancion.titulo || cancion.titulo.trim() === '')
        {
            throw new Error("La canción debe tener un título.");
        }

        if(!cancion.artista || cancion.artista.trim() === '')
        {
            throw new Error("La canción debe tener un artista.");
        }

        const datos = {...cancion};

        if(!datos.id)
        {
            datos.id = Date.now().toString();
        }

        if(datos.activo === undefined)
        {
            datos.activo = true;
        }

        return await this.repobibliotecals.crear(datos);
    }
    async edbiblioteca(cancion)
    {
        if(!cancion.titulo || cancion.titulo.trim() === '')
        {
            throw new Error("La canción debe tener un título.");
        }

        if(!cancion.artista || cancion.artista.trim() === '')
        {
            throw new Error("La canción debe tener un artista.");
        }

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
    async cambfavorito(id)
    {
        const canciones = await this.listabiblioteca();

        for(let i = 0; i < canciones.length; i++)
        {
            if(canciones[i].id === id)
            {
                canciones[i].favorita = !canciones[i].favorita;

                return await this.edbiblioteca(canciones[i]);
            }
        }

        throw new Error("Canción no encontrada.");
    }
    async cambescuchada(id)
    {
        const canciones = await this.listabiblioteca();

        for(let i = 0; i < canciones.length; i++)
        {
            if(canciones[i].id === id)
            {
                canciones[i].escuchada = !canciones[i].escuchada;

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