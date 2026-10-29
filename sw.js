// El service worker está diseñado para guardar en el caché una copia de elementos importantes.

const VERSION_CACHE = "version-4.4"


/* Esta función lo que hace es "instalar" en el navegador una cache cuando escuche el evento que necesita,
esta cache lo que guarda es algunas respuestas a archivos como HTML, CSS o JS. En este caso le puse al archivo
que instala "version x numero", si no existe la crea, y si existe lo abre.*/  

// Intenté escribirlo como "instalar" pero para este caso acepta eventos específicos en inglés xd.
self.addEventListener("install", function(event) {  
    event.waitUntil(caches.open(VERSION_CACHE).then(function(cache) {
        /* Es una serie de pasos mas o menos enredada xd, primero esperamos a que ocurra el evento, esperamos
        hasta que termine de crearse, se crea la caché y si ya existe solo se abre, y entonces (then),
        se recibe cuando ya esté lista. */


            /* Cuando esté listo lo anterior y se abra el archivo caché, se retornará un guardado de los archivos
            que le indiquemos. */
            return cache.addAll(["index.html","login.html","biblioteca.html","dashboard.html","playlists.html",
            "historial.html","estadisticas.html","artistas.html","css/styles.css","css/artistas.css",
            "css/biblioteca.css","css/inicio.css","css/login.css","css/movil.css","artistas.js","biblioteca.js",
            "agregar-cancion.html","repo-playlist.js","libs/alpine.min.js",
            "repo-base.js","repo-artistas.js","servi-artistas.js","contr-artistas.js","compo-artistas.js",
            "repo-biblioteca.js","servi-biblioteca.js","buscador.js",
            "servi-playlists.js","contr-playlists.js","compo-playlists.js","compo.js","manifest.json",
            "Icono-RMusic/RegiMusicIc.png","Icono-RMusic/RegiMusicIc - 192.png","Icono-RMusic/RegiMusicIc - 512.png",
            "Artistas-Imagenes/4f.webp","Artistas-Imagenes/hef.jpg","Artistas-Imagenes/Los 4F.png","Artistas-Imagenes/Laufey.jpg", "contr-aregar-cancion.js"]);
        }));
});

self.addEventListener("fetch", function(event) {
    /* En la función anterior instalabamos una caché que guardaba las respuestas que se realizaban en la página
    para guardarlo en caso de no tener conexión. Y ahora con fetch, esta función trabaja como un detector/radar
    que detecta vaya cuando la página hace solicitudes, con event.request accedemos a la solicitud que hizo
    el navegador, con match buscamos si hay una respuesta (event.request), y en caso de haber una detección de
    solicitud, se responde con el respondWith, ahora mismo expliqué el proceso al revés, estoy explicandolo como
    leer inglés, desde dentro hacia afuera, o como derivar con cadena xd. */

    /* Parte 2; (luego de .then), buscamos la solicitude del navegador con match(event.request), 
    usamos esa función (.then) y preguntamos si existe o no, en caso de existir,
    retornamos la respuesta, y en caso de no existir respuesta, retornamos el (fetch), que intenta encontrar el
    archivo desde el server por internet.*/
    event.respondWith(caches.match(event.request).then(function(respuesta) {
        if(respuesta) {
            return respuesta;
        }

        return fetch(event.request);
    }));
});

/* Intenté hacerle un comentario a este comando pero no se me ocurre nada bueno que decir, 
básicamente se trata de cuando está activa busca hasta encontrar todas las cachés que existen y luego se van comparando
con la que está como referencia en VERSION_CACHE, va funcionando en un loop if, donde va eliminando cachés anteriores. */
self.addEventListener("activate", function(event) {
    event.waitUntil(caches.keys().then(async function(versiones) {
        console.log("Versiones detectadas: ", versiones);

        for(let i=0; i < versiones.length;i++) {
            if(versiones[i] !== VERSION_CACHE) {
                console.log("Caché vieja:", versiones[i]);
                await caches.delete(versiones[i]);
            }
        }
    }));
});
