const mongoose = require("mongoose");

async function conemongo()
{
    // Primero está revisando que exista ese proceso/variable.
    if(!process.env.MONGODB_URI)
    {
        throw new Error("Falta la variable MONGODB_URI.");
    }

    // Espera a que MDB Atlas se conecte.
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("Conectado con MongoDB correctamente.");
}

module.exports = conemongo;