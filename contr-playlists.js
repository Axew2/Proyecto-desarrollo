// Estoy adaptando el CRUB en base a lo que hice con artistas, por eso son iguales por cierto.

// Tuve que añadir 3 métodos que agrega un formulario, las funciones permiten abrirlo, editarlo y guardarlo.
function registrarctrplaylists(serviplaylists) 
{
    document.addEventListener('alpine:init', () => {
        Alpine.data('repeplaylists', () => ({ playlists: [], cargando: false, error: '', vplaylist: false,
            nplaylist: '', peditando: null,
            
            async init() 
            {
                await this.cargarplaylists();
            },
            async cargarplaylists()
            {
                this.cargando = true;
                this.error = '';

                try
                {
                    this.playlists = await serviplaylists.listaplay();
                }
                catch (error)
                {
                    this.error = 'No se pudieron cargar las playlists.';
                    console.error(error);
                }
                finally
                {
                    this.cargando = false;
                }
            },
            async crearplay(playlist)
            {
                try
                {
                    await serviplaylists.crearplay(playlist);
                    await this.cargarplaylists();
                    return true;
                }
                catch (error)
                {
                    this.error = 'No se pudo crear la playlist.';
                    console.error(error);
                    return false;
                }
            },
            async editarplay(actualizarplay)
            {
                try
                {
                    await serviplaylists.editarplay(actualizarplay);
                    await this.cargarplaylists();
                    return true;
                }
                catch (error)
                {
                    this.error = 'No se pudo editar la playlist.';
                    console.error(error);
                    return false;
                }
            },
            async eliminarplay(id)
            {
                try
                {
                    await serviplaylists.eliminarplay(id);
                    await this.cargarplaylists();
                }
                catch (error)
                {
                    this.error = 'No se pudo eliminar la playlist.';
                    console.error(error);
                }
            },
            acrear()
            {
                this.error = '';
                this.peditando = null;
                this.nplaylist = '';
                this.vplaylist = true;
            },
            aeditar(playlist)
            {
                this.error = '';
                this.peditando = playlist;
                this.nplaylist = playlist.titulo;
                this.vplaylist = true;
            },
            async gform()
            {
                const titulo = this.nplaylist.trim();

                if (titulo === '')
                {
                    this.error = 'Escribe un nombre para la playlist.';
                    return;
                }

                let guardado;

                if (this.peditando !== null)
                {
                    guardado = await this.editarplay({ ...this.peditando, titulo: titulo });
                }
                else
                {
                    guardado = await this.crearplay({ titulo: titulo, canciones: [] });
                }

                if (guardado)
                {
                    this.vplaylist = false;
                    this.nplaylist = '';
                    this.peditando = null;
                }
            }
        }));
    });
}
