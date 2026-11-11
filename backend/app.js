const express = require("express");
const app = express();
module.exports = app;

const artistas =require ("./rutas/artistas");
app.use( "/api/artistas", artistas)