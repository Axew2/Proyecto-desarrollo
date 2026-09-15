# Regi Music

Regi Music es una aplicación web orientada a la exploración de música y artistasm, similar a como funciona spotify.

El sitio permite navegar entre distintos artistas, consultar datos sobre ellos, pbservar la biblioteca de canciones e ingresar mediante una vista de inicio de sesión..

Este proyecto corresponde a la Entrega 1 de Desarrollo Web y Móvil.

## Integrantes

- Claudio Salinas
- Diago Zavalaga
- Bastian Cisternas

## Tecnologías utilizadas

- HTML5
- CSS
- JavaScript
- Git y GitHub
- nginx
- AWS EC2

## Servidor

IP pública: 3.80.113.225

http://3.80.113.225

La aplicación está desplegada en una instancia EC2 y es servida mediante nginx.

## Vistas y rutas

### Inicio

Ruta:

`/index.html`

Página principal de Regi Music. Presenta el sitio y permite acceder a las demás secciones.

### Artistas

Ruta:

`/artistas.html`

Muestra los artistas disponibles en Regi Music y permite un vistazo a información adicional de cada artista.

### Mi Biblioteca

Ruta:

`/biblioteca.html`

Muestra una playlist con canciones, artistas, álbumes, duración y si fue escuchada antes.

### Iniciar Sesión

Ruta:

`/login.html`

Formulario de inicio de sesión a travez de un correo electrónico y contraseña.

### Dashboard

Ruta: 

`/dashboard.html`

Pagina de administradores, que contiene un formulario para subir canciones.

## JavaScript

El proyecto utiliza JavaScript básico para agregar interactividad mediante manipulación del DOM.

Entre las interacciones implementadas se encuentran:

- Mostrar y ocultar la contraseña en el inicio de sesión.
- Marcar y desmarcar canciones como escuchadas.
- Mostrar y ocultar información adicional de los artistas.

## Repositorio

El proyecto usa un flujo de trabajo basado en ramas `feature/*`, para despues integrarlas a la rama `develop`.

La rama `main` se utiliza para representar la versión final de la entrega.