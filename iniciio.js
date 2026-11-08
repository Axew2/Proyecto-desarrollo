function registrarInicio(serviartistas, servibiblioteca, servihistorial)
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
                        let adesactivado = false;

                        for(let j = 0; j < lista.length; j++)
                        {
                            if(biblioteca[i].artista.trim().toLowerCase() === lista[j].nombre.trim().toLowerCase())
                            {
                                if(lista[j].activo === false)
                                {
                                    adesactivado = true;
                                }
                                break;
                            }
                        }
                        if(biblioteca[i].activo !== false && adesactivado === false && this.canciones.length < 3)
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
                this.pausar();
                this.scancion = id;
            },

            async reproducir()
            {
                for(let i = 0; i < this.canciones.length; i++)
                {
                    if(this.canciones[i].id === this.scancion)
                    {
                        const cancion = this.canciones[i];

                        if(!cancion.audio)
                        {
                            console.error("La canción no tiene audio.");
                            return;
                        }

                        const reproductor = this.$refs.areproductor;
                        const nreproduccion = reproductor.getAttribute("src") !== cancion.audio || reproductor.currentTime === 0 || reproductor.ended;
                        
                        if(reproductor.getAttribute("src") !== cancion.audio)
                        {
                            reproductor.src = cancion.audio;
                        }

                        try
                        {
                            await reproductor.play();
                        }
                        catch(error)
                        {
                            console.error("No se pudo reproducir la canción.", error);
                            return;
                        }

                        if(nreproduccion)
                        {
                            try
                            {
                                await servihistorial.registrarreproduccion(cancion);
                            }
                            catch(error)
                            {
                                console.error("No se pudo guardar la reproducción.", error);
                            }
                        }

                        return;
                    }
                }
            },

            pausar()
            {
                this.$refs.areproductor.pause();
            },

            siguiente()
            {
                if(this.canciones.length === 0)
                {
                    return;
                }

                for(let i = 0; i < this.canciones.length; i++)
                {
                    if(this.canciones[i].id === this.scancion)
                    {
                        if(i === this.canciones.length - 1)
                        {
                            this.scancion = this.canciones[0].id;
                        }
                        else
                        {
                            this.scancion = this.canciones[i + 1].id;
                        }
                        this.reproducir();
                        return;
                    }
                }

                this.scancion = this.canciones[0].id;
                this.reproducir();
            },

            get cancionActual()
            {
                for(let i = 0; i < this.canciones.length; i++)
                {
                    if(this.canciones[i].id === this.scancion)
                    {
                        return this.canciones[i];
                    }
                }
                return null;
            }
        }));
    });
}