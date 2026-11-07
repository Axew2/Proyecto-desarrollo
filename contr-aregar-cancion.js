function REGistrarLAcancion(servibiblioteca)
{
    document.addEventListener('alpine:init', () => {
        Alpine.data('GestionnaCAncion', () => ({ seleccionadas: [], titulo: '', artista: '', duracion: '', album: '', portada: '',cargando: false, error: '', 
            conectado: navigator.onLine, mensaje: '',
        
        
            async AGRegoCAncion()
            {
                this.cargando = true;
                this.error = '';
                this.mensaje = '';

                try
                {
                    const cancion = {
                        titulo: this.titulo,
                        album: this.album,
                        duracion: this.duracion,
                        artista: this.artista,
                        portada: this.portada,
                        activo: true,
                        id: Date.now().toString()
                    };

                    await servibiblioteca.cbiblioteca(cancion);

                    this.mensaje = 'Los datos de la canción se guardaron correctamente.';
                }
                catch(error)
                {
                    this.error = 'No se pudo agregar la canción.';
                    console.error(error);
                }
                finally
                {
                    this.cargando = false;
                }
            }
        }));
    });
}


