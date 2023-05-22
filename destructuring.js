'use strict'


const datosLibro = ["IT", "Stephen King", 1986, "Novela de terror", ["Terror", "Suspenso", "Ficción"] ]

const [titulo, autor, anio, genero, etiqueta] = datosLibro;

console.log("Titulo: ",titulo);
console.log("Autor: ",autor);
console.log("Año: ",anio);
console.log("Genero: ",genero);
console.log("Etiqueta: ",etiqueta);

console.log("Carros americanos URGENTITTO");
const marcasAutos = ["Toyota", "Nissan", "Swm", ["Tesla", "Ford"]];

const [ , , , [americano1, americano2]] = marcasAutos;

console.log(americano1); 
console.log(americano2); 
