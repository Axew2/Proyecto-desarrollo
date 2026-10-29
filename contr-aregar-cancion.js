function REGistrarLAcancion(servibiblioteca)
{
    document.addEventListener('alpine:init', () => {
        Alpine.data('GestionnaCAncion', () => ({ seleccionadas: [], titulo: '', artista: '', duracion: '', album: '', portada: '',cargando: false, error: '', conectado: navigator.onLine,
        
        
            async AGRegoCAncion()
            {
                const cancion = { 
                    titulo: this.titulo, album: this.album, duracion: this.duracion, artista: this.artista, portada: this.portada, id: Date.now().toString()
                };

                await servibiblioteca.cbiblioteca(cancion);
            }

        }));

    });
}


