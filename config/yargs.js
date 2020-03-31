let argv = require('yargs')
.command('crear','Crea un elemento por hacer',{
    descripcion:{
        alias:'d'
    }
})
.command('actualizar','Actualiza el estado completado de una tarea',{
    descripcion:{
        alias:'d',
        demand: true
    },
    completado:{
        alias:'c',
        default:true
    }
})
.command('listar','Lista todas las tareas existentes')
.command('borrar','Borra un elemento del arreglo',{
    descripcion:{
        alias:'d',
        demand:true
    }
})
.help().argv;

module.exports = {
    argv
}