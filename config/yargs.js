const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar un elemento de la lista de tareas', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}

// comando crear 'Crear un elemento por hacer'
//     --descripcion -d

// actualizar actualizar 'Actualiza el estado completado de una tarea'
//     --descripcion -d
//     --completado -c true

// --help