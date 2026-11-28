const Artista = require("../modelos/artista.js");

class RepositorioART{
    async listar() {
        const lista =await Artista.find();
        return lista;
    }
    async buscar(id){   
        console.log(id)
        const artista = await Artista.findOne({id: id});
        return artista;
    }
}

module.exports = RepositorioART;