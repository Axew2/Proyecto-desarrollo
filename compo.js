if (document.body.classList.contains("artistas"))
{
    const repoartistas = new repoartistasls("rmusic-artistas", diartistas);
    const serviartistas = new sartistas(repoartistas);

    registrarctrlartistas(serviartistas);
}

if (document.body.classList.contains("playlists"))
{
    const repoplaylists = new repoplaylistsls("rmusic-playlists", diplaylists);
    const serviplaylists = new splaylists(repoplaylists);

    registrarctrplaylists(serviplaylists);
}

if(document.body.classList.contains("biblioteca") && !document.body.classList.contains("playlists"))
{
    const repobiblioteca = new repobibliotecals("rmusic-biblioteca");
    const servibiblioteca = new sbiblioteca(repobiblioteca);

    registrarctrlbiblioteca(servibiblioteca);
}
   
if(document.getElementById("seccion-gestion-canciones"))    
{        
    const repobiblioteca = new repobibliotecals("rmusic-biblioteca");
    const servibiblioteca = new sbiblioteca(repobiblioteca);
    
    REGistrarLAcancion(servibiblioteca);
}
