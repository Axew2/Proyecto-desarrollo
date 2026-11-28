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
        const datosPermitidos = {};
        if(Object.hasOwn(datos, "nombre")){
            datosPermitidos.nombre = datos.nombre;
        }if(Object.hasOwn(datos, "generos")){
            datosPermitidos.generos= datos.generos;
        }if(Object.hasOwn(datos, "imagen")){
            datosPermitidos.imagen= datos.imagen;
        }if(Object.hasOwn(datos, "biografia")){
            datosPermitidos.biografia= datos.biografia;
        }if(Object.hasOwn(datos, "activo")){
            datosPermitidos.activo= datos.activo;
        }if(Object.hasOwn(datos, "descripcion")){
            datosPermitidos.descripcion= datos.descripcion;
        }
        const actualizado = await Artista.findOneAndUpdate({id: id}, datosPermitidos, {new: true, runValidators: true});
        return actualizado;

    }
    async actualizarParcial(id,datos){
        const datosPermitidos = {};
        if(Object.hasOwn(datos, "nombre")){
            datosPermitidos.nombre = datos.nombre;
        }if(Object.hasOwn(datos, "generos")){
            datosPermitidos.generos= datos.generos;
        }if(Object.hasOwn(datos, "imagen")){
            datosPermitidos.imagen= datos.imagen;
        }if(Object.hasOwn(datos, "biografia")){
            datosPermitidos.biografia= datos.biografia;
        }if(Object.hasOwn(datos, "activo")){
            datosPermitidos.activo= datos.activo;
        }if(Object.hasOwn(datos, "descripcion")){
            datosPermitidos.descripcion= datos.descripcion;
        }
        const actualizadoParcial = await Artista.findOneAndUpdate({id: id}, datosPermitidos,{new: true, runValidators: true});
        return actualizadoParcial;
    }
    async eliminar(id){
        const eliminar = await Artista.findOneAndDelete({id: id} )
        return eliminar;
    } 
}

module.exports = RepositorioART;