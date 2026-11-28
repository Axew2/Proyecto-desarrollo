const express =require("express");
function crearrouterart(servicio){
const router = express.Router();
    router.get("/",async(req, res) => {
        const lista = await servicio.listar(); 
        res.json(lista)

    });
    router.get("/:id", async(req, res )=>{
        const buscado = await servicio.buscar(req.params.id);
        res.json(buscado);
    });
    return router;
};
module.exports = crearrouterart;
