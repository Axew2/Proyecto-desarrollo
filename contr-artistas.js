
function registrarctrlartistas(serviartistas) 
{
    document.addEventListener('alpine:init', () => {
        Alpine.data('repeartistas', () => ({ genero: 'todos', artistas: [], gendispo: [], cargando: false, error: '',
            async init() 
            {
                this.cargando = true;
                this.error = '';
                try 
                {
                    this.artistas = await serviartistas.listaartistas();

                    this.gendispo = [...new Set( this.artistas.flatMap(artista => artista.generos ) ) ];
                } catch (error) 
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
            }
        }));
    });
}
