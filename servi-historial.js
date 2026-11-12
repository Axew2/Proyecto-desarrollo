class shistorial
{
    constructor(repohistorialls)
    {
        this.repohistorialls = repohistorialls;
    }

    async listahistorial()
    {
        return await this.repohistorialls.listar();
    }

    async registrarreproduccion(cancion)
    {
        if(!cancion || !cancion.id)
        {
            throw new Error("Canción no válida.");
        }
        const reproduccion = {
            id: Date.now().toString(),
            cancionId: cancion.id,
            titulo: cancion.titulo,
            artista: cancion.artista,
            album: cancion.album,
            fecha: new Date().toISOString()
        };
        return await this.repohistorialls.crear(reproduccion);
    }

    async contarcanciones()
    {
        const historial = await this.listahistorial();
        const ranking = [];
        for(let i = 0; i < historial.length; i++)
        {
            let encontrada = false;
            for(let j = 0; j < ranking.length; j++)
            {
                if(ranking[j].cancionId === historial[i].cancionId)
                {
                    ranking[j].reproducciones++;
                    encontrada = true;
                    break;
                }
            }
            if(encontrada === false)
            {
                ranking.push({
                    cancionId: historial[i].cancionId,
                    titulo: historial[i].titulo,
                    artista: historial[i].artista,
                    reproducciones: 1
                });
            }
        }
        for(let i = 0; i < ranking.length; i++)
        {
            for(let j = i + 1; j < ranking.length; j++)
            {
                if(ranking[j].reproducciones > ranking[i].reproducciones)
                {
                    const auxiliar = ranking[i];
                    ranking[i] = ranking[j];
                    ranking[j] = auxiliar;
                }
            }
        }
        return ranking;
    }

    async contarartistas()
    {
        const historial = await this.listahistorial();
        const ranking = [];
        for(let i = 0; i < historial.length; i++)
        {
            let encontrada = false;
            for(let j = 0; j < ranking.length; j++)
            {
                if(ranking[j].artista.trim().toLowerCase() === historial[i].artista.trim().toLowerCase())
                {
                    ranking[j].reproducciones++;
                    encontrada = true;
                    break;
                }
            }
            if(encontrada === false)
            {
                ranking.push({
                    artista: historial[i].artista,
                    reproducciones: 1
                });
            }
        }
        for(let i = 0; i < ranking.length; i++)
        {
            for(let j = i + 1; j < ranking.length; j++)
            {
                if(ranking[j].reproducciones > ranking[i].reproducciones)
                {
                    const auxiliar = ranking[i];
                    ranking[i] = ranking[j];
                    ranking[j] = auxiliar;
                }
            }
        }
        return ranking;
    }
}