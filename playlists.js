const formuPlaylists = document.querySelector("#crear-playlist-form");

const tablaPlaylistsBody = document.querySelector("#tabla-playlists-body");
console.log(tablaPlaylistsBody);


const lista = {
    titulo: "Reggaeton",
    canciones: ["Dákiti", "Despacito"]
}

const laufey = {
    titulo: "para estudiar",
    canciones: ["From the start"]
}   

const playlistObjetos = [lista, laufey];
console.log(playlistObjetos);


function AgregoPlaylist(nombreplaylist) {
    const filaNueva = {
        titulo: nombreplaylist,
        canciones: []
    };
    playlistObjetos.push(filaNueva);
    console.log("Fila nueva agregada:", filaNueva);
}
  

formuPlaylists.addEventListener("submit", function(event) {
    event.preventDefault();
    const nombrePlaylist = document.querySelector("#nombre-playlist").value;
    console.log("Nombre de la playlist:", nombrePlaylist);

    AgregoPlaylist(nombrePlaylist);

});

