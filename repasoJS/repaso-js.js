var nombre = "Yhoel Perez";
var altura = 170;
var concatenar = nombre + " " + altura;
var datos = document.getElementById("datos");
datos.innerHTML = `
    <h1> Caja de datos </h1>
    <h1> Test of the js code </h1>
    <h2> Mi nombre : ${nombre} </h2>
    <h3> Mi altura : ${altura} </h3>`;
if(altura >= 170){
    datos.innerHTML +=`<h1> Eres una persona alta.</h1>`;
}else{
    datos.innerHTML +=`<h1> Estas por debajo del promedio.</h1>`;
}