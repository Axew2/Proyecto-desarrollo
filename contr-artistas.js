
function registrarctrlartistas(serviartistas) 
{
    document.addEventListener('alpine:init', () => {
        Alpine.data('repeartistas', () => ({ genero: 'todos', artistas: [], gendispo: [], cargando: false, error: '',
            muestraFormu: false,
            //agregue el "muestraformu" para que se pueda abrir el formualario de añadir al artista <-- Basti
            
            //<!-- la diferencia entre el texto y el arreglo genero es que uno es para el usuario y el otro para la app -->
            nUevoArtis:{
                id: "", nombre: "", generos: [], generoTExto: "", biografia: "", imagen: "", descripcion: ""            
            },

            async init() 
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
            
            async agregarALNuevoArtista(){
                const Geneross = this.nUevoArtis.generoTExto.split(",");
                this.nUevoArtis.generos = Geneross;
                await this.crearartista(this.nUevoArtis);
                this.nUevoArtis = {
                    id: "", nombre: "", generos: [], generoTExto: "", biografia: "", imagen: "", descripcion: ""
                }; 
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
