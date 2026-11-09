class repohistorialls extends repobase
{
    constructor(clave)
    {
        super();
        this.clave = clave;
    }

    async listar()
    {
        const datos = localStorage.getItem(this.clave);

        if(datos === null)
        {
            return [];
        }

        return JSON.parse(datos);
    }

    async crear(reproduccion)
    {
        const historial = await this.listar();
        historial.push(reproduccion);
        localStorage.setItem(this.clave, JSON.stringify(historial));
        return reproduccion;
    }
}