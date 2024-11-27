const {registrarCita, leerCita} = require('./operaciones.js'); /*con esta linea esty requiriendo las dos funciones que cree en el archivo operaciones */

const argumentosUsuario = process.argv.slice(2);/*procesar argumentos desde la posicion 2 del arreglo, la 0 y 1 son programa y nombre del archivo, por eso hago el slice*/


if (argumentosUsuario.length > 0){
    const operacion = argumentosUsuario[0] /*defino que en la posicion 0 del arreglo se indicará la operación a realizar*/

    if (operacion === 'leer'){
        console.log(leerCita())
    }
    else if (operacion === 'registrar'){
        if (argumentosUsuario.length === 6){
            const listaCitas = leerCita();
            listaCitas.push(
                {/*se define que se entrega en cada posición  y se guarda en lista citas junto con lo que ya había*/
                    "nombre del animal": argumentosUsuario[1],
                    "edad": argumentosUsuario[2],
                    "tipo de animal": argumentosUsuario[3],
                    "color de animal": argumentosUsuario[4],
                    "enfermedad": argumentosUsuario[5]
                }
            )
            registrarCita(listaCitas);
            console.log(listaCitas)
        }
        else{
            console.log("datos no validos")
        }
    }
    else{
        console.log('las operaciones permitidas son: registrar y leer')
    }
}
else{
    console.log('Indique una de las operaciones permitidad, estas son: registrar y leer')
}

/*index.js: Archivo principal que deberá ser ejecutado para interactuar con la
aplicación. En este archivo se deberán importar las operaciones que creen y lean las
citas de atención en la veterinaria*/