require("dotenv").config();
const app = require("./app")
const conemongo = require("./configuracion/cMongo.js");
const puerto = process.env.PORT || 3000;


// Tuve que adaptar el código, Diago. Le agregué lo que requería que funcionara lo mío con Mongo, le modifiqué el
// coso del puerto, para que use el puerto por defecto (definido) en el .env que creé, y si ese no existe, usa el 3000.

// Esta es una función que se conecta con el Atlas, espera a que se conecte y si es así, inicia el express, y si no, detiene el server mostrando el error.
async function iniciar()
{
    try
    {
        await conemongo();
        app.listen(puerto, () => { console.log("Servidor iniciado en el puerto " + puerto); });
    }
    catch(error)
    {
        console.error("No se pudo iniciar el servidor:", error.message);
        process.exit(1);
    }
}
iniciar();