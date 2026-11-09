function rdashboard(servibiblioteca, serviartistas)
{
    document.addEventListener('alpine:init', () => {
        Alpine.data('dashboard', () => ({
            vpanel: true,
            cantcanciones: 0,
            cantartistas: 0,
            cargando: false,
            error: '',

            async init()
            {
                this.cargando = true;
                this.error = '';

                try
                {
                    const canciones = await servibiblioteca.listabiblioteca();
                    const artistas = await serviartistas.listaartistas();

                    this.cantcanciones = canciones.length;
                    this.cantartistas = artistas.length;
                }
                catch(error)
                {
                    this.error = 'No se pudieron cargar los datos del catálogo.';
                    console.error(error);
                }
                finally
                {
                    this.cargando = false;
                }
            },

            altpanel()
            {
                this.vpanel = !this.vpanel;
            }
        }));
    });
}