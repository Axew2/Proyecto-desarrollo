class repoartistasls extends repobase 
{
    constructor(clave, diniciales = [] ) 
    {
        super();
        this.clave = clave;
        this.diniciales = diniciales;
    }

    /* Recupera datos que hayan sido guardados en el navegador, o los crea. */
    async listar()
    {
        const datosguardados = localStorage.getItem(this.clave);

        if(datosguardados === null)
        {
            localStorage.setItem(this.clave, JSON.stringify(this.diniciales));
            return this.diniciales;
        }
        return JSON.parse(datosguardados);
    }

    /* Agrega un artista. */
    async crear(artista)
    {
        const artistas = await this.listar();
        artistas.push(artista);
        localStorage.setItem(this.clave, JSON.stringify(artistas));
        return artista;
    }

    /* Actualiza los datos de un artista q ya exista. */
    async editar(actualizarart)
    {
        const artistas = await this.listar();
        let encontrado = false;

        for(let i = 0; i < artistas.length; i++)
        {
            if(artistas[i].id === actualizarart.id)
            {
                artistas[i] = actualizarart;
                encontrado = true;
                break;
            }
        }

        if(!encontrado)
        {
            throw new Error("Artista no encontrado/disponible")
        }

        localStorage.setItem(this.clave, JSON.stringify(artistas));
        return actualizarart;
    }

    /* Elimina un artista por su id. */
    async eliminar(id)
    {
        const artistas = await this.listar();
        const actualizarart = [];
        let encontrado = false;

        for(let i = 0; i < artistas.length; i++)
        {
            if(artistas[i].id !== id)
            {
                actualizarart.push(artistas[i]);
            }
            else
            {
                encontrado = true;
            }
        }

        if(!encontrado)
        {
            throw new Error("Artista no encontrado/disponible")
        }

        localStorage.setItem(this.clave, JSON.stringify(actualizarart));
    }
}