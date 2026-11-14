const express = require("express");

/* Otro código más o menos sencillo, se crean rutas de autenticación (register, login) donde se reciben los datos del usuario y llama 
al servicio de autentificacion para registrar o iniciar sesión, y si todo funciona se devuelve
una respuesta json con su código http que le corresponde, y si hay un error lo envía al middleware
con next. */
function crauth(sauth)
{
    const router = express.Router();
    router.post("/registro", async (req, res, next) => {
        try 
        {
            const { nombre, correo, password } = req.body || {};
            const usuario = await sauth.registrar( nombre, correo, password );
            return res.status(201).json(usuario);
        }
        catch (error)
        {
            next(error);
        }
    });

    router.post("/login", async (req, res, next) => {
        try
        {
            const { correo, password } = req.body;
            const resultado = await sauth.isesion( correo, password ) || {};
            return res.status(200).json(resultado);
        } 
        catch (error)
        {
            next(error);
        }
    });
    return router;
}
module.exports = crauth;