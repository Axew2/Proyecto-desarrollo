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
    async actualizar(id, datos){
        const actualizado = await Artista.findOneAndUpdate({id: id}, datos, {new: true, runValidators: true});
        return actualizado;

    }
    async actualizarParcial(id,datos){
        const actualizadoParcial = await Artista.findOneAndUpdate({id: id}, datos,{new: true, runValidators: true});
        return actualizadoParcial;
    }
    async eliminar(id){
        const eliminar = await Artista.findOneAndDelete({id: id} )
        return eliminar;
    } 
}

module.exports = RepositorioART;