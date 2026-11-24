const Usuario = require("../modelos/usuario.js");

class repousuarios
{
    async bporcorreo(correo)
    {
        const usuario = await Usuario.findOne({ correo: correo });
        return usuario;
    }

    async crear(nombre, correo, passwordHash)
    {
        const usuario = await Usuario.create({ nombre: nombre, correo: correo, passwordHash: passwordHash });
        return usuario;
    }
}

module.exports = repousuarios;