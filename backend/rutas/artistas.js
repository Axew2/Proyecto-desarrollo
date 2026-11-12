const express =require("express");
function crearrouterart(servicio){
const router = express.Router();
    router.get("/",async(req, res) => {
        const lista = await servicio.listar(); 
        res.json(lista)
    });
    return router;
};
module.exports = crearrouterart;
