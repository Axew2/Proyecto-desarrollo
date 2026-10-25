// Para poder crear id únicas para cada playlist y evitar el problema de tener 2 con el mismo id, se usa la sig. función:

function generaridplay()
{
    // Date.now obtiene la fecha y hora actual, tostring(36) acorta ese número, math.random saca un número random xd,
    //  .slice(2) quita el 0. del número random.
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

class repoplaylistsls extends repobase
{
    constructor(clave, diniciales = [] )
    {
        super();
        this.clave = clave;
        this.diniciales = diniciales;
    }

    async guardarPlaylists(playlists) 
    {
        localStorage.setItem(this.clave, JSON.stringify(playlists))
    }

    async obtenerPlaylists() 
    {
        const item = localStorage.getItem(this.clave)

        if(item == null)
        {
            return []
        }
        return JSON.parse(item)
    }

    async listar()
    {
        const datosguardados = localStorage.getItem(this.clave);
        let playlist;

        if (datosguardados === null)
        {
            playlist = this.diniciales.map(p => ({ ...p }));
        }
        else
        {
            playlist = JSON.parse(datosguardados);
        }

        let actualizar = datosguardados === null;

        for (let i = 0; i < playlist.length; i++)
        {
            if (!playlist[i].id)
            {
                playlist[i] = { ...playlist[i], id: generaridplay() };
                actualizar = true;
            }
        }

        if (actualizar)
        {
            localStorage.setItem(this.clave, JSON.stringify(playlist));
        }

        return playlist;
    }

    async crear(cplaylists)
    {
        const playlist = await this.listar();
        const nplaylist = { ...cplaylists, id: cplaylists.id || generaridplay() };
        
        if(playlist.some(p => p.id === nplaylist.id))
        {
            throw new Error("ID ya ocupado.")
        }

        playlist.push(nplaylist);

        localStorage.setItem(this.clave, JSON.stringify(playlist));
        return nplaylist;
    }

    async editar(actualizarplay)
    {
        const playlist = await this.listar();
        
        const index = playlist.findIndex(playlists => playlists.id === actualizarplay.id);

        if(index === -1)
        {
            throw new Error("Playlist no encontrada/disponible")
        }

        const playactualizada = { ...playlist[index], ...actualizarplay, id: playlist[index].id }

        playlist[index] = playactualizada;

        localStorage.setItem(this.clave, JSON.stringify(playlist));
        return playactualizada;
    }

    async eliminar(id) 
    {
        const playlist = await this.listar();

        const eplaylist = playlist.find( playlists => playlists.id === id );

        if (!eplaylist) 
        {
            throw new Error("Playlist no encontrada.");
        }

        const playact = playlist.filter( playlists => playlists.id !== id );

        localStorage.setItem(this.clave, JSON.stringify(playact) );

        return eplaylist;
    }
}