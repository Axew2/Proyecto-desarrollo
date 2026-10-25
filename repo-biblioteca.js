// Se sigue la misma estructura que las otras repos.

class repobibliotecals extends repobase
{
    constructor(clave)
    {
        super();
        this.clave = clave;
    }
    async listar()
    {
        const datos = localStorage.getItem(this.clave);

        if(datos === null)
        {
            return [];
        }

        return JSON.parse(datos);
    }
    async crear(cancion)
    {
        const canciones = await this.listar();

        for(let i = 0; i < canciones.length; i++)
        {
            if(canciones[i].id === cancion.id)
            {
                throw new Error("La canción ya está registrada.")
            }
        }

        canciones.push(cancion);
        localStorage.setItem(this.clave, JSON.stringify(canciones));
        return cancion;
    }
    async editar(cancion)
    {
        const canciones = await this.listar();

        for(let i = 0; i < canciones.length; i++)
        {
            if(canciones[i].id === cancion.id)
            {
                canciones[i] = { ...canciones[i], ...cancion };
                localStorage.setItem(this.clave, JSON.stringify(canciones));
                return canciones[i];
            }
        }
        throw new Error("Canción no encontrada/disponible.")
    }
    async eliminar(id)
    {
        const canciones = await this.listar();

        for(let i = 0; i < canciones.length; i++)
        {
            if(canciones[i].id === id)
            {
                const eliminada = canciones[i];
                canciones.splice(i, 1);
                localStorage.setItem(this.clave, JSON.stringify(canciones));
                return eliminada;
            }
        }
        throw new Error("Cancion no encontrada/disponible.")
    }
}