class ServerSong{
     constructor(repositorio){
        this.repositorio =repositorio;
    }
    async listar(){
         const lista =await this.repositorio.listar();
         return lista;
    }
    async buscar(id){
        const buscado = await this.repositorio.buscar(id)
        if (!buscado){
            const error = new Error("La cancion no existe")
            error.status = 404
            throw error;
        }
        return buscado;
    }
    async crear(cancion){
        if (!cancion || !cancion.titulo){
            const error =new Error("La cancion necesita un titulo");
            error.status = 400;
            throw error;
        }if(!cancion || !cancion.artista){
            const error =new Error("La cancion necesita un artista");
            error.status = 400;
            throw error;
        }
        const nuevo = await this.repositorio.crear(cancion);
        
        return nuevo
    }
    async actualizar(id, datos){
        if (!datos){
            const error = new Error("Faltan los datos para modificar")
            error.status = 400;
            throw error;
        }
        if (!datos || !datos.titulo){
            const error =new Error("La cancion necesita un titulo");
            error.status = 400;
            throw error;
        }
        if(!datos || datos.artista){
            const error =new Error("La cancion necesita un artista");
            error.status = 400;
            throw error;
        }
        if (OBject.hasOwn(datos, "_id")){
            const error = new Error("La id no se puede modificar")
            error.status = 400
            throw error;
        }
        const act_cancion = await this.repositorio.actualizar(id, datos);
        if(!act_cancion){
            const error = new Error("Cancion no encontrado");
            error.status = 404;
            throw error;
        }
        return act_cancion;
    }
    async actualizarParcial(id, datos){
         if (!datos ||!Object.keys(datos).length ){
            const error = new Error("Faltan los datos para modificar")
            error.status = 400;
            throw error;
        }
        if (Object.hasOwn(datos, "titulo")){
        if (!datos || !datos.titulo){
            const error =new Error("La cancion necesita un titulo");
            error.status = 400;
            throw error;
        }}
        if (Object.hasOwn(datos, "artista")){
        if(!datos || !datos.artista){
            const error =new Error("La cancion necesita al menos un artista");
            error.status = 400;
            throw error;
        }}
        if (Object.hasOwn(datos, "_id")){
            const error = new Error("La id no se puede modificar")
            error.status = 400
            throw error;
        }const actp_cancion =await this.repositorio.actualizarParcial(id, datos);
        if(!actp_cancion){
             const error = new Error("Cancion no encontrado");
            error.status = 404;
            throw error;
        }
        return actp_cancion;
    } 
     async eliminar(id){
        const eliminar = await this.repositorio.eliminar(id)
        if (!eliminar){
            const error = new Error("La cancion no fue encontrada")
            error.status = 404
            throw error;
        }
        return eliminar
    }
}
module.exports = ServerSong;