const express = require("express");
const servicioArtistas= require("./Servicios/servicio.artistas")
const RepositorioArt= require("./repositorios/repo.artistas"); 
const crearrouterart =require ("./rutas/artistas");
const app = express();
const repositorio = new RepositorioArt();
const servicio = new servicioArtistas(repositorio);

const artistas =crearrouterart(servicio);
app.use( "/api/artistas", artistas)

module.exports = app;