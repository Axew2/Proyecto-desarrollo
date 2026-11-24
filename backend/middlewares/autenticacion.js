const jwt = require("jsonwebtoken");

function verificarToken(req, res, next) 
{
    // autorización obtiene el header/cabecera/encabezado q es enviado por el usuario.
    const autorizacion = req.headers.authorization;
    if (!autorizacion) // Si no hay token, ocurre esto. 
    {
        return res.status(401).json({ error: "Token requerido" });
    }

    const partes = autorizacion.split(" "); // Separa el bearer del jwt (el bearer es el "portador" como un enviado, un heraldo de que va a llegar x cosa)
    if (partes.length !== 2 || partes[0] !== "Bearer" || !partes[1]) 
    {
        return res.status(401).json({ error: "Formato de token incorrecto" });
    }

    const token = partes[1];
    try 
    {
        const datos = jwt.verify(token, process.env.JWT_SECRET); // Verifica la firma/signature y la expiración dle token
        if (typeof datos.sub !== "string" || !datos.sub) // Comprueba que el identificador que se obtuvo exista y que sea texto
        {
            return res.status(401).json({ error: "Token inválido" });
        }
        req.usuario = { id: datos.sub }; // El identificador obtenido lo deja disponible para las siguientes cosas q se busquen lograr.
        next(); // Con este continúa hacia la ruta protegida a la q estaba destinada.

    } 
    catch (error) // Si el token expiró o es inválido se responde con este error 401
    {
        return res.status(401).json({ error: "Token inválido o expirado" });
    }
}

module.exports = verificarToken; // Da permiso a que el middleware se importe desde otros archivos que puedan ocuparlo.