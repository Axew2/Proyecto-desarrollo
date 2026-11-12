const mongoose = require("mongoose");
// Tenemos que llamar a Mongoose para que se pueda utilizar dentro del archivo,
// al programar esto defino estas reglas con moongose.Schema, y moongose las tiene que aplicar.

const artistaSchema = new mongoose.Schema({
    nombre: { type: String, required: true,
        // Trim según un tipo que preguntó en Stack Overflow se usa para eliminar todo lo relacionado con espacios al inicio o final.
        trim: true },

    generos: {
        // Se usa un String con corchetitos para que sirva en el caso de que un artista tenga muxos géneros que guardar.
        type: [String], required: true,

        // Este sirve para validar que el artista tenga al menos un género al que pertenezca :v, por eso validate.
        validate: {
            validator: function(generos) {
                return generos.length > 0;
            },
            message: "El artista debe tener al menos un género."
        }
    },

    imagen: { type: String, trim: true },

    descripcion: { type: String, trim: true },

    biografia: { type: String, trim: true },

    activo: {
        // Por como se definió en correcciones anteriores respectivas a la entrega 2, por defecto los artistas
        // están definidos como true, de activos, y ya ahí despues según lo que ocurra se puede ver si se desactivan o no.
        type: Boolean, default: true }
});

const Artista = mongoose.model("Artista", artistaSchema);
// lo convertimos en modelo, lo ke significa que dsp el repo lo puede usar para trabajar con mongodb.

module.exports = Artista;
// Permite que otros archivos importen y utilicen el modelo creado.