document.addEventListener('alpine:init', () => {
    Alpine.data('perfilartista', () => ({
        mostrarperfil: false, textoboton: 'Mostrar Perfil',

        altperfil() {
            this.mostrarperfil = !this.mostrarperfil;

            this.$dispatch('perfil-cambiado', {abierto: this.mostrarperfil});

            if (this.mostrarperfil)
            {
                this.textoboton = 'Ocultar Perfil';
                
            }
            else 
            {
                this.textoboton = 'Mostrar Perfil';
            }
        },
        avisarestado(id)
        {
            this.$dispatch('cambiar-estado-artista', id);
        },
        textoestado(activo)
        {
            if(activo === false)
            {
                return 'Activar artista';
            }
            else
            {
                return 'Desactivar artista';
            }
        }
    }));
});