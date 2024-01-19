const nombre = 'Deadpool';
const real = 'Wade wilson';

const normal = nombre + ' '+ real;
const template = `${nombre} ${real}`;

console.log(normal);
console.log(template);
console.log(normal === template);

//if you put a line break in the inside of variable, in the console you can see the line break
const html = `
<h1>hola</h1>
<p>Mundo</p>
`;
console.log(html);