const fs = require('fs');

let listadoPorHacer = [];

const guardarDocumento = () => {
    return new Promise((resolve,reject) => {
        let data = JSON.stringify(listadoPorHacer);
        console.log(data);
        fs.writeFile('documentos/tareas.json',data,(err) =>{
            if(err){
                reject('Hubo un error revisa');
            }
            resolve('Todo fue chido wey');
        });
    });
}

const cargarDocumento = () => {
    try {
        listadoPorHacer = require('../documentos/tareas.json');
    } catch{
        listadoPorHacer = []
    }
} 

const crear = (descripcion) => {
    cargarDocumento();
    let tarea = {
        descripcion,
        completado: false
    }
    listadoPorHacer.push(tarea);
    guardarDocumento().then(exito => console.log(exito))
    .catch(err => console.log(err));
}

const listar = () => {
    cargarDocumento();
    listadoPorHacer.forEach((tarea) => {
        console.log(`${tarea.descripcion}  Estado: ${tarea.completado}`);
    })
}

const actualizar = (descripcion,completado=true) => {
    cargarDocumento();
    console.log(listadoPorHacer)
    //let valor = listadoPorHacer.find((tarea) => tarea.descripcion === descripcion);
    listadoPorHacer.forEach((tarea) => {
        if(tarea.descripcion===descripcion){
            tarea.completado=completado;
        }
    });
    guardarDocumento().then(exito => console.log(exito))
    .catch(err => console.log(err));
}

const borrar = (descripcion) => {
    cargarDocumento();
    listadoPorHacer= listadoPorHacer.filter((tarea) => tarea.descripcion !== descripcion);
    guardarDocumento().then(exito => console.log(exito))
    .catch(err => console.log(err));
}


module.exports = {
    crear,
    listar,
    actualizar,
    borrar
} 
