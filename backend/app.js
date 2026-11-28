const express = require("express");
const servicioArtistas= require("./Servicios/servicio.artistas")
const RepositorioArt= require("./repositorios/repo.artistas"); 
const crearrouterart =require ("./rutas/artistas");
const repositorio = new RepositorioArt();
const servicio = new servicioArtistas(repositorio);
const verificarToken = require("./middlewares/autenticacion");
const artistas =crearrouterart(servicio);
const repousuarioss = require("./repositorios/repo.usuarios");
const sauthh = require("./Servicios/servicio.auth");
const crauth = require("./rutas/auth");
const repousuarios = new repousuarioss();
const sauth = new sauthh(repousuarios);
const auth = crauth(sauth);
const app = express();
app.use(express.json());
app.use("/api/auth", auth);
app.use( "/api/artistas", artistas);
app.get("/api/prueba-auth", verificarToken, (req, res) => { res.status(200).json({ mensaje: "Token válido", usuarioId: req.usuario.id }); });
app.use((error, req, res, next) => {
    console.error(error);
    const estado = error.status || 500;
    const mensaje = estado >= 500 ? "Error interno del servidor." : error.message;
    return res.status(estado).json({ error: mensaje });
});
module.exports = app;