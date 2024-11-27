
const fs = require('fs');
const nombreArchivo ='citas.json'

const registrarCita =(citas) => {
    fs.writeFileSync(nombreArchivo, JSON.stringify(citas));
}

const leerCita =() => {
    if (!fs.existsSync(nombreArchivo)) {
        // Si el archivo no existe, lo creamos vacío y retornamos un arreglo vacío
        fs.writeFileSync(nombreArchivo, JSON.stringify([]));
        return [];
    }
    return JSON.parse(fs.readFileSync(nombreArchivo,'utf-8'));
}
module.exports = {registrarCita, leerCita} /*aqui se deben indicar las funciones o variables que se quieren exportar, se usan llaves por que son multiples exportaciones si es una sola sin llaves pero tambien seria sin llave en el required*/

/*operaciones.js: En este archivo se deberán crear 2 funciones para:
○ Registrar: Agregar una nueva cita de una atención veterinaria que debe incluir:
■ Nombre del animal
■ Edad
■ Tipo de animal
■ Color del animal
■ Enfermedad
○ Leer: Mostrar por consola todas las citas registradas.
*/