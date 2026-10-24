const diartistas = [
    {
        id: "hector-el-father", nombre: "Hector El Father", generos: ["Reggaeton"], imagen: "Artistas-Imagenes/hef.jpg",
        descripcion: "Hector El Father, uno de los pioneros del género urbano de la Old School.",
        biografia: "Nació en Carolina, Puerto Rico, y es conocido por su estilo único y su influencia en la música urbana. Su carrera ha dejado un legado significativo en el reggaeton y ha colaborado con numerosos artistas del género."
    },
    {
        id: "laufey", nombre: "Laufey", generos: ["Jazz", "Jazz Pop", "Pop"], imagen: "Artistas-Imagenes/Laufey.jpg",
        descripcion: "Laufey es reconocida mundialmente por revitalizar el Jazz en la generación Z.",
        biografia: "Nació en Islandia y es conocida por su estilo único que combina el jazz tradicional con elementos modernos. Su música ha sido ampliamente reconocida y ha recibido múltiples premios."
    },
    {
        id: "los-4-f", nombre: "Los 4 Fantásticos", generos: ["Trap", "Reggaeton", "Pop"], imagen: "Artistas-Imagenes/4f.webp",
        descripcion: "Los 4 Fantásticos son un grupo chileno formado por Kidd Voodoo, DrefQuila, Easykid y Young Cister.",
        biografia: "Los 4 Fantásticos son un grupo chileno que ha ganado reconocimiento por su estilo único que combina elementos de trap, reggaeton y pop."
    } ];

const repoartistas = new repoartistasls
(
    "rmusic-artistas",
    diartistas
);

const serviartistas = new sartistas(
    repoartistas
);

registrarctrlartistas(serviartistas);