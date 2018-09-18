/* eslint one-var: 0 */

const birds = [
  {
    name: "Hornero",
    family: "Furnaridae"
  },
  {
    name: "Junquero",
    family: "Furnaridae"
  },
  {
    name: "Tachurí Siete Colores",
    family: "Tirannydae"
  },
  {
    name: "Piojito Común",
    family: "Tirannydae"
  },
  {
    name: "Benteveo Común",
    family: "Tirannydae"
  },
  {
    name: "Zorzal Colorado",
    family: "Turdidae"
  }
];

// Imprimir lo siguiente:
// 1. Array de nombres de todos los pájaros ordenados alfabéticamente.
// 2. Obtener el objeto completo del que tiene nombre "Zorzal Colorado".
// 3. Array de nombres de los pájaros de la familia "Tirannydae".
// 4. Cantidad de pájaros de la familia "Furnaridae".

//1.
const listaPajaros = birds.sort((bird1, bird2) => bird1.name > bird2.name);
const NombresPajaros = listaPajaros.map(n => n.name);
console.log("Se ordenaron los pajaros: ", NombresPajaros);

//2.
const objEncontrado = birds.find(bird => bird.name === 'Zorzal Colorado');
console.log("Se encontro el pajaro Zorzal: ", objEncontrado);

//3
const objTirannydae = birds.filter(bird => bird.family === 'Tirannydae');
const nombresTirannydae = objTirannydae.map(n => n.name);
console.log("Estos son Tirannydae: ", nombresTirannydae);

//4.
//const listaFurnidae = birds.filter(bird => bird.family === 'Furnidae');
const cantFurnidae = birds.reduce((contador, bird) => {
  return contador + (bird.family === "Furnaridae" ? 1 : 0);
}, 0);
console.log(cantFurnidae);