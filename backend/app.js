const express = require("express");
/* artistas */
const serverArtistas= require("./Servicios/servicio.artistas")
const RepositorioArt= require("./repositorios/repo.artistas"); 
const crearrouterart =require ("./rutas/artistas");
const repositorioArt = new RepositorioArt();
const servicioart = new serverArtistas(repositorioArt);
const artistas =crearrouterart(servicioart);
/*--------*/
const verificarToken = require("./middlewares/autenticacion");
const repousuarioss = require("./repositorios/repo.usuarios");
const sauthh = require("./Servicios/servicio.auth");
const crauth = require("./rutas/auth");
const repousuarios = new repousuarioss();
const sauth = new sauthh(repousuarios);
const auth = crauth(sauth);
const app = express();
/*canciones*/
const RepositorioCancion=require("./repositorios/repo.cancion");
const serverSong = require("./Servicios/servicio.cancion")
const crearrouterSong = require("./rutas/cancion")
const reposong = new RepositorioCancion();
const servicioSong = new serverSong(reposong);
const canciones = crearrouterSong(servicioSong);
/*------*/
app.use(express.json());
app.use("/api/auth", auth);
app.use( "/api/artistas", artistas);
app.use("/api/canciones", canciones)
app.get("/api/prueba-auth", verificarToken, (req, res) => { res.status(200).json({ mensaje: "Token válido", usuarioId: req.usuario.id }); });
app.use((error, req, res, next) => {
    console.error(error);
    const estado = error.status || 500;
    const mensaje = estado >= 500 ? "Error interno del servidor." : error.message;
    return res.status(estado).json({ error: mensaje });
});
module.exports = app;