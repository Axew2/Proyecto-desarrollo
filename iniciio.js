function iniicio(){
    document.addEventListener('alpine:init', () => {
    Alpine.data('inicio', () => ({ SElecArtistA: 'hector',

        SEleccionaArtis(artista){
            this.SElecArtistA = artista;
        }

        }));
    });
}