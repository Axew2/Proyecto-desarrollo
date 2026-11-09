document.addEventListener('alpine:init', () => {
    Alpine.data('login', () => ({
        rolinformacion: 'oyente',
        mostrarcontra: false,

        cambiarrol(rol)
        {
            this.rolinformacion = rol;
        },

        altcontra()
        {
            this.mostrarcontra = !this.mostrarcontra;
        },

        textocontra()
        {
            if(this.mostrarcontra)
            {
                return 'Ocultar Contraseña';
            }
            else
            {
                return 'Mostrar Contraseña';
            }
        },

        tipocontra()
        {
            if(this.mostrarcontra)
            {
                return 'text';
            }
            else
            {
                return 'password';
            }
        }
    }));
});