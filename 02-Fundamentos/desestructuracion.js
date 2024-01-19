const deadpool = {
    nombre : 'wade',
    apellido: 'wilson',
    poder : 'regeneracion',
    // edad : 50,
    getNombre (){
        return `${this.nombre} ${this.apellido} ${this.poder}`;
    }
};
// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;


function imprimeHero({nombre, apellido, poder, edad =0}){
    nombre = 'Yhoel';
    console.log(nombre, apellido, poder, edad);
};


// imprimeHero(deadpool);

const heroes = ['Deadpool', 'Superman','Batman'];

// const h1 = heros[0];
// const h2 = heros[1];
// const h3 = heros[2];

const [, , h3] = heroes

console.log( h3);
