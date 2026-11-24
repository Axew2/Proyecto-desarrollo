const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Clase bastante intuitiva de leer, basicamente registra usuarios, se asegura de que todos sean datos válidos, con bcrypt se protegen las contraseñas
// si hay un correo duplicado responde con e409, en login se comprubean las credenciales, jwt genera tokens que duran 1 hora antes de expirar,
// NUNCA retorna el passwordHash y si un usuario no existe o la clave es incorrecta es e401. Entre algunas otras cosas que contiene el código.

class sauth
{
    constructor(repousuarios)
    {
        this.repousuarios = repousuarios;
    }

    async registrar(nombre, correo, password)
    {
        if ( typeof nombre !== "string" || typeof correo !== "string" || typeof password !== "string" || !nombre.trim() || !correo.trim() || password.length === 0 )
        {
            const error = new Error("Todos los campos son obligatorios y deben tener un formato válido.");
            error.status = 400;
            throw error;
        }
        const climpio = correo.trim().toLowerCase();
        const cvalido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(climpio);

        if (!cvalido)
        {
            const error = new Error("El correo no es válido.");
            error.status = 400;
            throw error;
        }

        const existente = await this.repousuarios.bporcorreo(climpio);

        if (existente)
        {
            const error = new Error("El correo ya está registrado.");
            error.status = 409;
            throw error;
        }
        const passwordHash = await bcrypt.hash(password, 10);

        try
        {
            const usuario = await this.repousuarios.crear( nombre.trim(), climpio, passwordHash );
            return { id: usuario._id.toString(), nombre: usuario.nombre, correo: usuario.correo };
        }
        catch (error)
        {
            if (error.code === 11000)
            {
                const duplicado = new Error("El correo ya está registrado.");
                duplicado.status = 409;
                throw duplicado;
            }
            throw error;
        }
    }
    async isesion(correo, password)
    {
        if ( typeof correo !== "string" || typeof password !== "string" || !correo.trim() || password.length === 0 )
        {
            const error = new Error("Correo y contraseña son obligatorios.");
            error.status = 400;
            throw error;
        }

        const climpio = correo.trim().toLowerCase();
        const usuario = await this.repousuarios.bporcorreo(climpio);

        if (!usuario)
        {
            const error = new Error("Correo o contraseña incorrectos.");
            error.status = 401;
            throw error;
        }

        const pcorrecta = await bcrypt.compare( password, usuario.passwordHash );

        if (!pcorrecta)
        {
            const error = new Error("Correo o contraseña incorrectos.");
            error.status = 401;
            throw error;
        }

        if (!process.env.JWT_SECRET)
        {
            throw new Error("JWT_SECRET no está configurada.");
        }

        const token = jwt.sign( { sub: usuario._id.toString() }, process.env.JWT_SECRET, { expiresIn: "1h" } );

        return { token: token, usuario: { id: usuario._id.toString(), nombre: usuario.nombre, correo: usuario.correo } };
    }
}
module.exports = sauth;