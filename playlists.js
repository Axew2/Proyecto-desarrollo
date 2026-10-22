const formuPlaylists = document.querySelector("#crear-playlist-form");
const playlists = ["Reggaeton", "Para estudiar"];

formuPlaylists.addEventListener("submit", function(event) {
    event.preventDefault();
    const nombrePlaylist = document.querySelector("#nombre-playlist").value;
    console.log("Nombre de la playlist:", nombrePlaylist);
    playlists.push(nombrePlaylist);
    console.log("Playlists:", playlists);
});

const tablaPlaylistsBody = document.querySelector("#tabla-playlists-body");
console.log(tablaPlaylistsBody);


