# Regi Music

Regi Music es una aplicación web orientada a la exploración de música y artistasm, similar a como funciona spotify.

El sitio permite navegar entre distintos artistas, consultar datos sobre ellos, pbservar la biblioteca de canciones e ingresar mediante una vista de inicio de sesión..

El proyecto fue actualizado para cumplir con lo solicitado de la entrega 1 y la nueva entrega 2 correspondiente al back end.

## Integrantes

- Claudio Salinas
- Diago Zavalaga
- Bastian Cisternas

## El video ya está disponible en el github y canvas, con el nombre de: Proyecto DWEB grupo 4.mp4 en la carpea de Artistas-Imagenes.

## Tecnologías utilizadas

- HTML5
- CSS
- JavaScript
- Git y GitHub
- nginx
- AWS EC2
- Alpine.js
- localStorage
- SW y PWA

## Servidor

IP pública: 52.91.52.255 

http://52.91.52.255 

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

Formulario de inicio de sesión a traves de un correo electrónico y contraseña. Tiene un apartado el cual muestra la información de los tres
tipos de permiso que hay y que significa cada uno, usaurio, artista y admin., de momento no está implementado ese sistema aún.

### Dashboard

Ruta: 

`/dashboard.html`

Pagina de administradores, contiene las vistas del servidor, sus datos para el monitoreo, (cantidad de usuarios registrados, actividad del server,
usuarios conectados, cantidad de canciones registradas). De momento eso es solo conceptual, no está conectado aún al servidor para registrar esos
datos, de nuevo, gracias a alpine se puede ocultar y/o mostrar la tabla. Está destinado a los usuarios con permiso de "administrador" pero de momento
es solo conceptual, cualquiera puede acceder a el aún.

### Playlists

Ruta: 

`/playlists.html`

Permite ver, crear, editar y eliminar playlists. Las listas se conservan gracias al localStorage.

### Historial

Ruta: 

`/historial.html`

Tal como su nombre indica, permite ver las canciones que fueron marcadas como escuchadas (de momento solo de nombre), y con alpine, se puede
mostrar y ocultar la tabla.

### Estadísticas

Ruta: 

`/estadisticas.html`

Da la opción de ver que artistas han sido los mas escuchados recientemente, lo mismo con las canciones, gracias al alpine
se puede ocultar y/o mostrar la tabla, de momento los datos son datos planos que no representan cifras reales, fueron ingresados mediante html.

### Agregar Canción

Ruta: 

`/agregar-cancion.html`

Es la versión actualizada de dashboard, en esta página se agregan nuevas canciones a la página (guardadas, de nuevo mediante localStorage),
las canciones agregadas se ven reflejadas en el apartado de Mi Biblioteca. Está destinado a los usuarios con permiso de "artista" pero de momento
es solo conceptual, cualquiera puede acceder a el aún.

## JavaScript

El proyecto utiliza JavaScript y Alpine.js para poder actualizar la interfaz sin necesidad de recargar la página en las operaciones implementadas.
Los datos se gestionan mediante el orden básico de alpine necesario para los dominios como se explicó en ayudantía, controlador, servicio y repositorio.

Entre las interacciones implementadas se encuentran:

- Mostrar y ocultar la contraseña en el inicio de sesión.
- Marcar y desmarcar canciones como escuchadas.
- Mostrar y ocultar información adicional de los artistas.
- Buscador que permite buscar artistas, playlists y canciones registradas.
- Crear, editar y eliminar playlists.
- Mostrar perfiles, filtrar por género y crear, editar o eliminar artistas.
- Editar y eliminar canciones registradas en el dominio de biblioteca.
- Mostrar y ocultar rankings en el dominio de estadísticas y en dashboard.

## Organización

Cada dominio y vista tiene sus respectivas cosas, como el buscador que le corresponde su archivo .js. Algunas vistas que hacen mas uso de Alpine y tienen mas exigencias presentan sus respectivos archivos repositorios, servicios y controladores. Para el PWA, manifest.json define la versión de aplicación instalable y el Service Worker gestiona lo necesario en caché, incluida la librería de alpine.js que permite su uso sin conexión.

## Repositorio

El proyecto usa un flujo de trabajo basado en ramas `feature/*`, para despues integrarlas a la rama `develop`.

La rama `main` se utiliza para representar la versión final de la entrega.
