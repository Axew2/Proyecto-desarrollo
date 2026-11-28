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
}
module.exports = ServerSong;