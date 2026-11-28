const Artista = require("../modelos/artista.js");

class RepositorioART{
    async listar() {
        const lista =await Artista.find();
        return lista;
    }
    async buscar(id){   
        console.log(id)
        const buscado = await Artista.findOne({id: id});
        return buscado;
    }
    async crear(artista){
        const nuevo = await Artista.create(artista);
        return nuevo
    }
    async actualizar(){
        
    }
}

module.exports = RepositorioART;