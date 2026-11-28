class ServerArt{
    constructor(repositorio){
        this.repositorio =repositorio;
    }
    async listar(){
         const lista =await this.repositorio.listar();
         return lista;
    }
    async buscar(id){
        const buscado = await this.repositorio.buscar(id)
        return buscado;
    }
    async crear(artista){
        if (!artista || !artista.nombre){
            const error =new Error("El artista necesita un nombre");
            error.status = 400;
            throw error;
        }if(!artista || !Array.isArray(artista.generos)|| artista.generos.length === 0){
            const error =new Error("El artista necesita al menos un genero");
            error.status = 400;
            throw error;
        }if(!artista || !artista.id){
            artista.id = Date.now().toString()
        }
        
        const nuevo = await this.repositorio.crear(artista);
        
        return nuevo
        
    }
    async actualizar(id, datos){
        if (!datos){
            const error = new Error("Faltan los datos para modificar")
            error.status = 400;
            throw error;
        }
        if (!datos || !datos.nombre){
            const error =new Error("El artista necesita un nombre");
            error.status = 400;
            throw error;
        }
        if(!datos || !Array.isArray(datos.generos)|| datos.generos.length === 0){
            const error =new Error("El artista necesita al menos un genero");
            error.status = 400;
            throw error;
        }
        if (datos.id && datos.id !== id){
            const error = new Error("La id no se puede modificar")
            error.status = 400
            throw error;
        }
        const act_artista = await this.repositorio.actualizar(id, datos);
        if(!act_artista){
            const error = new Error("Artista no encontrado");
            error.status = 404;
            throw error;
        }
        return act_artista;
    }
}
module.exports = ServerArt;