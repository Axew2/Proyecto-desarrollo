const servicios = {
    biblioteca: null,
    artistas: null,
    playlists: null
};

function observibiblioteca()
{
    if(servicios.biblioteca === null)
    {
        const repobiblioteca = new repobibliotecals("rmusic-biblioteca");
        servicios.biblioteca = new sbiblioteca(repobiblioteca);
    }

    return servicios.biblioteca;
}

function observiartistas()
{
    if(servicios.artistas === null)
    {
        const repoartistas = new repoartistasls("rmusic-artistas", diartistas);
        servicios.artistas = new sartistas(repoartistas);
    }

    return servicios.artistas;
}

function observiplaylists()
{
    if(servicios.playlists === null)
    {
        const repoplaylists = new repoplaylistsls("rmusic-playlists", diplaylists);
        servicios.playlists = new splaylists(repoplaylists);
    }

    return servicios.playlists;
}

if(document.body.classList.contains("artistas"))
{
    const serviartistas = observiartistas();

    registrarctrlartistas(serviartistas);
}

if(document.body.classList.contains("playlists"))
{
    const serviplaylists = observiplaylists();

    const servibiblioteca = observibiblioteca();

    registrarctrplaylists(serviplaylists, servibiblioteca);
}

if(document.querySelector('[x-data="biblioteca"]'))
{
    const servibiblioteca = observibiblioteca();

    registrarctrlbiblioteca(servibiblioteca);
}
   
if(document.getElementById("seccion-gestion-canciones"))
{
    const servibiblioteca = observibiblioteca();

    REGistrarLAcancion(servibiblioteca);
}

if(document.querySelector(".Barra-busqueda"))
{
    const serviartistas = observiartistas();

    const servibiblioteca = observibiblioteca();

    const serviplaylists = observiplaylists();

    REGIstroBUSca(serviartistas, servibiblioteca, serviplaylists);
}

if(document.body.classList.contains("historial"))
{
    const repohistorial = new repohistorialls("rmusic-historial");
    const servihistorial = new shistorial(repohistorial);

    reGIstractELhiSTo(servihistorial);
}

if(document.body.classList.contains("inicio"))
{
    const serviartistas = observiartistas();

    const servibiblioteca = observibiblioteca();

    const repohistorial = new repohistorialls("rmusic-historial");
    const servihistorial = new shistorial(repohistorial);

    rinicio(serviartistas, servibiblioteca, servihistorial);
}

if(document.body.classList.contains("estadisticas"))
{
    const repohistorial = new repohistorialls("rmusic-historial");
    const servihistorial = new shistorial(repohistorial);

    restadisticas(servihistorial);
}

if(document.querySelector('[x-data="dashboard"]'))
{
    const servibiblioteca = observibiblioteca();
    const serviartistas = observiartistas();

    rdashboard(servibiblioteca, serviartistas);
}