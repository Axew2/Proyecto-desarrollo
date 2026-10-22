const formuPlaylists = document.querySelector("#crear-playlist-form");

formuPlaylists.addEventListener("submit", function(event) {
    event.preventDefault();
    const nombrePlaylist = document.querySelector("#nombre-playlist").value;
    console.log("Nombre de la playlist:", nombrePlaylist);

});

const tablaPlaylistsBody = document.querySelector("#tabla-playlists-body");
console.log(tablaPlaylistsBody);


