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
}
module.exports = ServerArt;