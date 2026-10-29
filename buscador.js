function REGIstroBUSca(serviartistas, servibiblioteca){
    document.addEventListener('alpine:init', () => {
    Alpine.data('buscador', () => ({ TEXtoBusque: '', ResulTA: [], CArgando: false, eRRor: '', 

        async BUScar(){
            this.CArgando = true;
            this.eRRor = '';
            this.ResulTA = [];

            try{
                const canciLISta = await serviartistas.listaartistas();
                const biblioLISta= await servibiblioteca.listabiblioteca();
                
                for(let i = 0; i < canciLISta.length; i++){
                    if(canciLISta[i].nombre.toLowerCase() === this.TEXtoBusque.toLowerCase()){
                        this.ResulTA.push(canciLISta[i]);
                    }
                }

                for(let i = 0; i < biblioLISta.length; i++){
                    if(biblioLISta[i].titulo.toLowerCase() === this.TEXtoBusque.toLowerCase()){
                        this.ResulTA.push(biblioLISta[i]);
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