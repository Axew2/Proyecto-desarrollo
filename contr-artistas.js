function registrarctrlartistas(serviartistas) 
{
    document.addEventListener('alpine:init', () => {
        Alpine.data('repeartistas', () => ({ genero: 'todos', artistas: [], gendispo: [], cargando: false, error: '',
            muestraFormu: false, EditoARtistaID: null, MEnsaPErfil: '', 
            //agregue el "muestraformu" para que se pueda abrir el formualario de añadir al artista <-- Basti
            // lo que agregue de editar artista id, es para editar un artista 
            // pero guardando su id porque asi sabemos con cual trabajamos <-- basti

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

                if(this.EditoARtistaID === null){ // esto sirve para crear o editar un artista dependiendo si tiene id o no, simplecito
                    if(await this.crearartista(this.nUevoArtis) === false ){
                        return;
                    }  
                }
                else{
                    if(await this.editarartista(this.nUevoArtis) === false){
                        return;
                    }
                }

                this.nUevoArtis = {id: "", nombre: "", generos: [], generoTExto: "", biografia: "", imagen: "", descripcion: ""};

                this.EditoARtistaID = null;
                this.muestraFormu = false;
            },

            async eDitaARtista(artista)
            {
                this.EditoARtistaID = artista.id;
                this.nUevoArtis = { id: artista.id, nombre: artista.nombre, generos: [...artista.generos], generoTExto: artista.generos.join(","), biografia: artista.biografia, imagen: artista.imagen, descripcion: artista.descripcion };
                this.muestraFormu = true;
            },

            async ABroArtistaNUEvo()
            { // esto deja que al abrir el formulario de agregar artista siempre este vacio, sin 
                //esto cuando editabas un artista y luego usabas agregar se ponia la info del que se editaba en vez de estar vacio <-- basti  
                this.EditoARtistaID = null;
                this.nUevoArtis = {id: "", nombre:"", generos: [], generoTExto: "", biografia: "", imagen: "", descripcion: ""};
                this.muestraFormu = true;
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
                    return true;
                }
                catch(error)
                {
                    this.error = 'No se pudo crear el artista.';
                    console.error(error);
                    return false;
                }
            },
            async editarartista(actualizarart)
            {
                try
                {
                    await serviartistas.editarartista(actualizarart);
                    await this.cargarartista();
                    return true;
                }
                catch(error)
                {
                    this.error = 'No se pudo editar el artista.';
                    console.error(error);
                    return false;
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
