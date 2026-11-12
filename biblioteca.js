function registrarctrlbiblioteca(servibiblioteca)
{
    document.addEventListener('alpine:init', () => {
        Alpine.data('biblioteca', () => ({ seleccionadas: [], favoritas: [], escuchadas: [], cargando: false, error: '', conectado: navigator.onLine,
            EDitandoLAcanci: null, DAtosEDitadoS: {}, canciones: [], mdesactivados: false, msolofavoritas: false,


            async init()
            {
                this.cargando = true;
                this.error = '';
                try
                {
                    const canciones = await servibiblioteca.listabiblioteca();
                    this.canciones = canciones;
                    
                    for(let i = 0; i < canciones.length; i++)
                    {
                        if(canciones[i].favorita === true)
                        {
                            this.favoritas.push(canciones[i].id);
                        }
                        if(canciones[i].escuchada === true)
                        {
                            this.escuchadas.push(canciones[i].id)
                        }
                    }
                }
                catch(error)
                {
                    this.error = 'No se pudo cargar la biblioteca en este momento.'
                    console.error(error);
                }
                finally
                {
                    this.cargando = false;
                }
            },
            
            // clista es cambiar la lista que había antes, agregar o quitar cosas.
            clista(lista, cancion)
            {
                const i = lista.indexOf(cancion);
                if(i === -1)
                {
                    lista.push(cancion);
                }
                else
                {
                    lista.splice(i, 1);
                }
            },
            desconectar()
            {
                this.conectado = false;
            },
            conectar()
            {
                this.conectado = true;
            },
            // cambfavorito = solo trabaja sobre el botón/dominio de favoritos.
            async cambfavorito(cancion)
            {
                this.error = '';
                try
                {
                    await servibiblioteca.cambfavorito(cancion);

                    this.clista(this.favoritas, cancion);
                }
                catch(error)
                {
                    this.error = 'No se pudo actualizar favoritos.';
                    console.error(error);
                }
            },
            // cambescuchada = trabaja sobre el botón/dominio de escuchada.
            async cambescuchada(cancion)
            {
                this.error = '';
                try
                {
                    await servibiblioteca.cambescuchada(cancion);

                    this.clista(this.escuchadas, cancion);
                }
                catch(error)
                {
                    this.error = 'No se pudo actualizar las canciones escuchadas.';
                    console.error(error);
                }
            },
            
            async ELiminCAnci(id)
            {
                this.error = '';

                try
                {
                    await servibiblioteca.elbiblioteca(id);
                    if(this.favoritas.includes(id))
                    {
                        this.clista(this.favoritas, id);
                    }
                    if(this.escuchadas.includes(id))
                    {
                        this.clista(this.escuchadas, id);
                    }
                    this.canciones = await servibiblioteca.listabiblioteca();
                }
                catch(error)
                {
                    this.error = 'No se pudo eliminar la canción.';
                    console.error(error);
                }
            },

            async eDitaCAnci(cancion){
                this.EDitandoLAcanci = cancion.id;
                this.DAtosEDitadoS = {...cancion};
            },

            cedicion()
            {
                this.EDitandoLAcanci = null;
                this.DAtosEDitadoS = {};
            },

            async GUardaEDit()
            {
                this.error = '';

                try
                {
                    await servibiblioteca.edbiblioteca(this.DAtosEDitadoS);
                    this.canciones = await servibiblioteca.listabiblioteca();
                    this.EDitandoLAcanci = null;
                    this.DAtosEDitadoS = {};
                }
                catch(error)
                {
                    this.error = error.message;
                    console.error(error);
                }
            },

            async cestcancion(id)
            {
                this.error = '';
                try
                {
                    await servibiblioteca.cestcancion(id);
                    this.canciones = await servibiblioteca.listabiblioteca();
                }
                catch(error)
                {
                    this.error = 'No se pudo cambiar el estado de la canción.';
                    console.error(error);
                }
            },

            textoestado(activo)
            {
                if(activo === false)
                {
                    return 'Activar canción';
                }
                else
                {
                    return 'Desactivar canción';
                }
            },

            textoescuchada(id)
            {
                if(this.escuchadas.includes(id))
                {
                    return 'Quitar de escuchadas.';
                }
                else
                {
                    return 'Marcar como escuchada.';
                }
            },

            textofavorito(id)
            {
                if(this.favoritas.includes(id))
                {
                    return 'Quitar de favoritos';
                }
                else
                {
                    return 'Agregar a favoritos';
                }
            },

            get cancvisibles()
            {
                const visibles = [];

                for(let i = 0; i < this.canciones.length; i++)
                {
                    if((this.mdesactivados || this.canciones[i].activo !== false)
                    && (!this.msolofavoritas || this.favoritas.includes(this.canciones[i].id)))
                    {
                        visibles.push(this.canciones[i]);
                    }
                }

                return visibles;
            },

            altdesactivadas()
            {
                this.mdesactivados = !this.mdesactivados;
            },

            altfavoritas()
            {
                this.msolofavoritas = !this.msolofavoritas;
            }

        }));
    });
}