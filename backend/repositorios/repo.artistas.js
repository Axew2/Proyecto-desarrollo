/*
Falta el modelo del artistas y eso se hace con la base de datos
*/
class RepositorioART{
    async listar() {
        const lista =await Artista.find();
        return lista;
    }
}

module.exports = RepositorioART;