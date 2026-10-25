async function guardarPlaylists(playlists) 
{
    localStorage.setItem("rmusic-playlists", JSON.stringify(playlists))
}

async function obtenerPlaylists() 
{
    const item = localStorage.getItem("rmusic-playlists")

    if(item == null)
    {
        return []
    }
    return JSON.parse(item)
}