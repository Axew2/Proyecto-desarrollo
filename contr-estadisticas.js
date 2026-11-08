function restadisticas(servihistorial)
{
    document.addEventListener('alpine:init', () => {
        Alpine.data('estadisticas', () => ({
            vmcanciones: true,
            vmostrar: true,
            historial: [],
            rankingcanciones: [],
            rankingartistas: [],
            cargando: false,
            error: '',

            async init()
            {
                this.cargando = true;
                this.error = '';

                try
                {
                    this.historial = await servihistorial.listahistorial();
                    this.rankingcanciones = await servihistorial.contarcanciones();
                    this.rankingartistas = await servihistorial.contarartistas();

                    console.log(this.rankingartistas);
                }
                catch(error)
                {
                    this.error = 'No se pudieron cargar las estadísticas.';
                    console.error(error);
                }
                finally
                {
                    this.cargando = false;
                }
            },

            altcanciones()
            {
                this.vmcanciones = !this.vmcanciones;
            },

            altartistas()
            {
                this.vmostrar = !this.vmostrar;
            }
        }));
    });
}