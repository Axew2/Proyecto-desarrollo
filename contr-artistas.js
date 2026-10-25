
function registrarctrlartistas(serviartistas) 
{
    document.addEventListener('alpine:init', () => {
        Alpine.data('repeartistas', () => ({ genero: 'todos', artistas: [], gendispo: [], cargando: false, error: '',
            muestraFormu: false,

            nUevoArtis:{
                nombre: "",
                generos: [],
                biografia: "",
                imagen: ""            

            },

            async init() 
            //agregue el "muestraformu" para que se pueda abrir el formualario de añadir al artista <-- Basti
            {
                await this.cargarartista();
            },
            async cargarartista() 
            {
                this.cargando = true;
                this.error = '';
                try 
                {
                    this.artistas = await serviartistas.listaartistas();
                    this.gendispo = [...new Set( this.artistas.flatMap(artista => artista.generos ) ) ];
                } 
                catch (error) 
                {
                    this.error = 'No se pudieron cargar los artistas.';
                    console.error(error);
                } 
                finally 
                {
                    this.cargando = false;
                }
            },

            seleccionargene(genero)
            {
                this.genero = genero;
            },
            async crearartista(artista)
            {
                try
                {
                    await serviartistas.crearartista(artista);
                    await this.cargarartista();
                }
                catch(error)
                {
                    this.error = 'No se pudo crear el artista.';
                    console.error(error);
                }
            },
            async editarartista(actualizarart)
            {
                try
                {
                    await serviartistas.editarartista(actualizarart);
                    await this.cargarartista();
                }
                catch(error)
                {
                    this.error = 'No se pudo editar el artista.';
                    console.error(error);
                }
            },
            async eliminarartista(id)
            {
                try
                {
                    await serviartistas.eliminarartista(id);
                    await this.cargarartista();
                }
                catch(error)
                {
                    this.error = 'No se pudo eliminar el artista.';
                    console.error(error);
                }
            }
        }));
    });
}
