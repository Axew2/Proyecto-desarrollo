const express =require("express");
function crearrouterart(servicio){
const router = express.Router();
    router.get("/",async(req, res) => {
        const lista = await servicio.listar(); 
        res.json(lista)

    });
    router.get("/:id", async(req, res, next )=>{
        try{
        const buscado = await servicio.buscar(req.params.id);
        res.json(buscado);
        }catch(error){
            next (error);
        }


    });
    router.post("/", async(req, res,next)=>{
        try{
        const nuevo = await servicio.crear(req.body);
        res.status(201);
        res.set("Location", "/api/artistas/" + nuevo.id)
        res.json(nuevo)}
        catch(error){
            next(error); 
        }
    });
    router.put("/:id", async(req, res, next)=>{
        try{
        const actualizar = await servicio.actualizar(req.params.id, req.body);
        res.status(200);
        res.json(actualizar);
        }catch(error){
            next(error);
        }
    });
    router.patch("/:id", async(req,res,next)=>{
        try{
            const actualizarParcial = await servicio.actualizarParcial(req.params.id, req.body);
            res.status(200);
            res.json(actualizarParcial);
        }catch(error){
            next(error);
        }
    });
    router.delete("/:id", async(req,res,next)=>{
        try{
            await servicio.eliminar(req.params.id)
            res.status(204);
            res.send();
        }catch(error){
            next(error);
        }
    })
    return router;
};
module.exports = crearrouterart;
