document.addEventListener('alpine:init', () => {
    Alpine.data('perfilartista', () => ({
        mostrarperfil: false, textoboton: 'Mostrar Perfil',

        altperfil() {
            this.mostrarperfil = !this.mostrarperfil;

            if (this.mostrarperfil)
            {
                this.textoboton = 'Ocultar Perfil';
                
            }
            else 
            {
                this.textoboton = 'Mostrar Perfil';
            }
        },
        pedicion(artista)
        {
            this.$dispatch('editar-artista', artista);
        },
        avisarestado(id)
        {
            this.$dispatch('cambiar-estado-artista', id);
        },
        pedeliminar(id)
        {
            this.$dispatch('eliminar-artista', id);
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