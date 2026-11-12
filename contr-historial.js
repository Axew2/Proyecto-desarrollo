function reGIstractELhiSTo(servihistorial)
{
    document.addEventListener('alpine:init', () => {
        Alpine.data('historial', () => ({
            HistoRI: true,
            CAnciEscUCha: [],
            cARgando: false,
            eRROr: '',

            async init()
            {
                await this.CARgaHIsto();
            },

            async CARgaHIsto()
            {
                this.cARgando = true;
                this.eRROr = '';
                this.CAnciEscUCha = [];

                try
                {
                    this.CAnciEscUCha = await servihistorial.listahistorial();
                }
                catch(error)
                {
                    this.eRROr = 'No se pudo cargar el historial.';
                    console.error(error);
                }
                finally
                {
                    this.cARgando = false;
                }
            },

            ffecha(fecha)
            {
                if(!fecha)
                {
                    return 'Sin fecha registrada';
                }

                return new Date(fecha).toLocaleString('es-CL');
            },

            althistorial()
            {
                this.HistoRI = !this.HistoRI;
            }
        }));
    });
}