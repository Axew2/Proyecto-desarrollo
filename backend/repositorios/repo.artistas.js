const Artista = require("../modelos/artista.js");

class RepositorioART{
    async listar() {
        const lista =await Artista.find();
        return lista;
    }
}

module.exports = RepositorioART;