document.addEventListener('alpine:init', () => {
Alpine.data('inicio', () => ({ SElecArtistA: 'hector', TEXtoBusque: '',

    SEleccionaArtis(artista){
       this.SElecArtistA = artista;
    }

    }));
});
