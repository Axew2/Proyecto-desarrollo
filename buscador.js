function REGIstroBUSca(serviartistas, servibiblioteca, serviplaylists){
    document.addEventListener('alpine:init', () => {
    Alpine.data('buscador', () => ({ TEXtoBusque: '', ResulTA: [], CArgando: false, eRRor: '', 

        async BUScar(){
            this.eRRor = '';
            this.ResulTA = [];

            if(this.TEXtoBusque.trim() === ''){
                return;
            }

            this.CArgando = true;

            try{
                const canciLISta = await serviartistas.listaartistas();
                const biblioLISta= await servibiblioteca.listabiblioteca();
                const playLISta = await serviplaylists.listaplay();

                for(let i = 0; i < canciLISta.length; i++){
                    if(canciLISta[i].nombre.toLowerCase().includes(this.TEXtoBusque.toLowerCase())){
                        this.ResulTA.push(canciLISta[i]);
                    }
                }

                for(let i = 0; i < biblioLISta.length; i++){
                    if(biblioLISta[i].titulo.toLowerCase().includes(this.TEXtoBusque.toLowerCase())
                    || biblioLISta[i].artista.toLowerCase().includes(this.TEXtoBusque.toLowerCase())
                    || biblioLISta[i].album.toLowerCase().includes(this.TEXtoBusque.toLowerCase())){
                        this.ResulTA.push(biblioLISta[i]);
                    }
                }

                for(let i = 0; i < playLISta.length; i++){
                    if(playLISta[i].titulo.toLowerCase().includes(this.TEXtoBusque.toLowerCase())){
                        this.ResulTA.push(playLISta[i]);
                    }
                }   
            }

            catch{
                this.eRRor = 'No es posible la busqueda';
            }

            finally{
                this.CArgando = false;
            }
        }

        }));
    });
}