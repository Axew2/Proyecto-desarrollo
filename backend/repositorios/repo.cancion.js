const Cancion = require ("../modelos/cancion.js")

class RepositorioCancion{
    async listar() {
        const lista =await Cancion.find();
        return lista;
    }
    async buscar (id){
        const buscado = await Cancion.findById(id);
        return buscado;
    }
    async crear(cancion){
        const nuevo = await Cancion.create(cancion);
        return cancion;
    }
    async actualizado(id, datos){
        const datosPermitidos = {}
        if(Object.hasOwn(datos, "titulo")){
            datosPermitidos.titulo = datos.titulo;
        }if(Object.hasOwn(datos, "artista")){
            datosPermitidos.artista = datos.artista;
        }if(Object.hasOwn(datos, "album")){
            datosPermitidos.album = datos.album;
        }if(Object.hasOwn(datos, "duracion")){
            datosPermitidos.duracion = datos.duracion;
        }if(Object.hasOwn(datos, "portada")){
            datosPermitidos.portada = datos.portada;
        }if(Object.hasOwn(datos, "audio")){
            datosPermitidos.audio = datos.audio;
        }if(Object.hasOwn(datos, "favorita")){
            datosPermitidos.favorita = datos.favorita;
        }if(Object.hasOwn(datos, "escuchada")){
            datosPermitidos.escuchada = datos.escuchada;
        }
        const actualizado = await Cancion.findByIdAndUpdate(id, datosPermitidos, {new: true, runValidators: true})
        return actualizado;
    }
    async actualizarParcial(id, datos){
        const datosPermitidos = {}
        if(Object.hasOwn(datos, "titulo")){
            datosPermitidos.titulo = datos.titulo;
        }if(Object.hasOwn(datos, "artista")){
            datosPermitidos.artista = datos.artista;
        }if(Object.hasOwn(datos, "album")){
            datosPermitidos.album = datos.album;
        }if(Object.hasOwn(datos, "duracion")){
            datosPermitidos.duracion = datos.duracion;
        }if(Object.hasOwn(datos, "portada")){
            datosPermitidos.portada = datos.portada;
        }if(Object.hasOwn(datos, "audio")){
            datosPermitidos.audio = datos.audio;
        }if(Object.hasOwn(datos, "escuchada")){
            datosPermitidos.escuchada = datos.escuchada;
        }if(Object.hasOwn(datos, "favorita")){
            datosPermitidos.favorita = datos.favorita;
        }
        const actualizarParcial = await Cancion.findByIdAndUpdate(id, datosPermitidos, {new: true, runValidators: true})
        return actualizarParcial;
    }



} 
module.exports = RepositorioCancion;