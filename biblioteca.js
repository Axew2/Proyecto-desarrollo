function registrarctrlbiblioteca(servibiblioteca)
{
    document.addEventListener('alpine:init', () => {
        Alpine.data('biblioteca', () => ({ seleccionadas: [], favoritas: [], escuchadas: [], cargando: false, error: '', conectado: navigator.onLine,

            async init()
            {
                this.cargando = true;
                this.error = '';
                try
                {
                    const canciones = await servibiblioteca.listabiblioteca();

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
                    const canciones = await servibiblioteca.listabiblioteca();
                    let encontrada = null;

                    for(let i = 0; i < canciones.length; i++)
                    {
                        if(canciones[i].id === cancion)
                        {
                            encontrada = canciones[i];
                            break;
                        }
                    }

                    if(encontrada === null)
                    {
                        await servibiblioteca.cbiblioteca({ id: cancion, favorita: true, escuchada: false });
                    }
                    else
                    {
                        await servibiblioteca.edbiblioteca({ ...encontrada, favorita: !encontrada.favorita });
                    }
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
                    const canciones = await servibiblioteca.listabiblioteca();
                    let encontrada = null;

                    for(let i = 0; i < canciones.length; i++)
                    {
                        if(canciones[i].id === cancion)
                        {
                            encontrada = canciones[i];
                            break;
                        }
                    }

                    if(encontrada === null)
                    {
                        await servibiblioteca.cbiblioteca({ id: cancion, favorita: false, escuchada: true });
                    }
                    else
                    {
                        await servibiblioteca.edbiblioteca({ ...encontrada, escuchada: !encontrada.escuchada });
                    }
                    this.clista(this.escuchadas, cancion);
                }
                catch(error)
                {
                    this.error = 'No se pudo actualizar las canciones escuchadas.';
                    console.error(error);
                }
            }
        }));
    });
}