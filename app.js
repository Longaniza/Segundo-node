const {argv} = require('./config/yargs');
const {crear,listar,actualizar,borrar} = require('./logica/logica');

//console.log(argv);
let comando = argv._[0];

switch(comando){
    case 'crear':
        console.log('Crear tarea por hacer');
        crear(argv.descripcion);
        //console.log(argv.descripcion)
        break;
    case 'listar':
        console.log('Mostrar todas las tareas por hacer');
        listar();
        break;
    case 'actualizar':
        console.log('Actualiza una tarea por hacer');
        actualizar(argv.descripcion);
        break;
    case 'borrar':
        console.log('Borra un elemento del arreglo')
        borrar(argv.descripcion);
    default:
        break;
}
