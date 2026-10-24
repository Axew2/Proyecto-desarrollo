document.addEventListener('alpine:init', () => {
    Alpine.data('repeartistas', () => ({
        genero: 'todos', artistas: [], gendispo: [],

        /* No es tan mágico como se ve, y tiene un par de cositas medio raras que tuve que investigar para que
        funcione, una de las cosas es el ...new, que lo que hace es eliminar los elementos duplicados (set los elimina
        y ... los hace arreglo), básicamente hace que sean únicos. Y el flatMap, es casi lo mismo que un map común, pero los ordena
        y "aplana" (?, de ahí el flat, que basicamente los ordena y "gestiona" de una buena manera.
        Y la flechita =>, que se parece a la de c++ que nos enseñaron, pero lo que hace es definir una función. */
        async init()
        {
            this.artistas = await ctrlartistas.listaartistas();
            this.gendispo = [...new Set( this.artistas.flatMap(artista => artista.generos))];
        }
    }));

    Alpine.data('perfilartista', () => ({
        mostrarperfil: false,
        textoboton: 'Mostrar Perfil',

        altperfil() {
            this.mostrarperfil = !this.mostrarperfil;

            if (this.mostrarperfil) {
                this.textoboton = 'Ocultar Perfil';
            } else {
                this.textoboton = 'Mostrar Perfil';
            }
        }
    }));
});