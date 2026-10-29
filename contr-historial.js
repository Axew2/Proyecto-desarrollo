function reGIstractELhiSTo(servibiblioteca)
{
    document.addEventListener('alpine:init', () => {
        Alpine.data('historial', () => ({
            HistoRI: true, CAnciEscUCha: [], cARgando: false, eRROr: '',

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
                    const cancio = await servibiblioteca.listabiblioteca();

                    for(let i = 0; i < cancio.length; i++)
                    {
                        if(cancio[i].escuchada === true)
                        {
                            this.CAnciEscUCha.push(cancio[i]);
                        }
                    }
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
            }
        }));
    });
}