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
}
module.exports = ServerArt;