const formuPlaylists = document.querySelector("#crear-playlist-form");
const tablaPlaylistsBody = document.querySelector("#tabla-playlists-body");


const lista = {
    titulo: "Reggaeton",
    canciones: ["Dákiti", "Despacito"]
}

const laufey = {
    titulo: "para estudiar",
    canciones: ["From the start"]
}   

let playlistObjetos = [lista, laufey];

async function cargarPlaylists()
{
    const saves = await obtenerPlaylists();

    if(saves.length > 0) 
    {
        playlistObjetos = saves;
    }
    console.log("Contenido de playlists listas: ", saves)
} cargarPlaylists();


async function AgregoPlaylist(nombreplaylist) {
    const filaNueva = {
        titulo: nombreplaylist,
        canciones: []
    };
    playlistObjetos.push(filaNueva);
    await guardarPlaylists(playlistObjetos);
    console.log("Fila nueva agregada:", filaNueva);
}
  

formuPlaylists.addEventListener("submit", async function(event) {
    event.preventDefault();
    const nombrePlaylist = document.querySelector("#nombre-playlist").value;
    console.log("Nombre de la playlist:", nombrePlaylist);

    await AgregoPlaylist(nombrePlaylist);

});

