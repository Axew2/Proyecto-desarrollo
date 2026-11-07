function registrarInicio(serviartistas, servibiblioteca)
{
    document.addEventListener('alpine:init', () => {
        Alpine.data('inicio', () => ({
            SElecArtistA: null,
            TEXtoBusque: '',
            artistas: [],
            canciones: [],
            scancion: null,

            async init()
            {
                try
                {
                    const lista = await serviartistas.listaartistas();
                    const biblioteca = await servibiblioteca.listabiblioteca();

                    this.artistas = [];
                    this.canciones = [];
                    this.SElecArtistA = null;
                    this.scancion = null;

                    for(let i = 0; i < lista.length; i++)
                    {
                        if(lista[i].activo !== false)
                        {
                            this.artistas.push(lista[i]);
                        }
                    }

                    for(let i = 0; i < biblioteca.length; i++)
                    {
                        let artistaDesactivado = false;

                        for(let j = 0; j < lista.length; j++)
                        {
                            if(biblioteca[i].artista.trim().toLowerCase() === lista[j].nombre.trim().toLowerCase())
                            {
                                if(lista[j].activo === false)
                                {
                                    artistaDesactivado = true;
                                }
                                break;
                            }
                        }
                        if(biblioteca[i].activo !== false && artistaDesactivado === false && this.canciones.length < 3)
                        {
                            this.canciones.push(biblioteca[i]);
                            if(this.scancion === null)
                            {
                                this.scancion = biblioteca[i].id;
                            }
                        }
                    }

                    if(this.artistas.length > 0)
                    {
                        this.SElecArtistA = this.artistas[0].id;
                    }
                }
                catch(error)
                {
                    console.error(error);
                }
            },

            SEleccionaArtis(artista)
            {
                this.SElecArtistA = artista;
            },

            seleccancion(id)
            {
                this.scancion = id;
            }
        }));
    });
}