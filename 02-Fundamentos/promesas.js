const empleados = [
    {
        id:1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id:3,
        nombre:'Karen'
    }
];
const salarios = [
    {
        id:1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];

const getEmpleado =(id)=>{
    //promise on js
    return new Promise((resolve, reject) => {
        const empleado = empleados.find( e => e.id === id)?.nombre;
        //THis is operador ternario.
        //similar to some  if(){}else{}. 
        (empleado) 
            ?resolve (empleado)
            :reject(`No existe empleado con id ${id}`);
        
    });
    // return promesa;
};

const getSalario = (id) =>{
    return new Promise((resolve, reject) => {
        const salario = salarios.find(e => e.id === id)?.salario;
        (salario)
        ?resolve(salario)
        : reject(`No hay salario con este id ${id}`);
    })
};

const id= 3;
//first mode to show the data
// getEmpleado(id)
// .then(empleado => console.log(empleado))
// .catch(err => console.log(err));

// getSalario(id)
// .then(salario => console.log(salario))
// .catch(err => console.log(err));


//second mode to show the data
//this form is correct but is too difficult to understand 
// getEmpleado (id) 
//     .then(empleado=>{
//         getSalario(id)
//         .then(salario=>{
//             console.log('El empleado:', empleado, 'tiene un salario de: ', salario);
//         })
//         .catch(err => console.log(err));
//     })
//     .catch(err => console.log(err));

getEmpleado(id)
    .then(empleado =>{
        console.log(empleado);
    })

