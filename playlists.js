const formuPlaylists = document.querySelector("#crear-playlist-form");
const playlists = ["Reggaeton", "Para estudiar"];

function AgregoPlaylist(nombreplaylist) {
    playlists.push(nombreplaylist);
}  

formuPlaylists.addEventListener("submit", function(event) {
    event.preventDefault();
    const nombrePlaylist = document.querySelector("#nombre-playlist").value;
    console.log("Nombre de la playlist:", nombrePlaylist);

    AgregoPlaylist(nombrePlaylist); 

    console.log("Playlists:", playlists);
});

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
