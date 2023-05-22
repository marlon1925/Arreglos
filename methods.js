'use strict';

const productosVegetales = ["Papas", "Tomate", "Pimiento", "Cebolla"];
const productosFrutas = ["Gineo", "Manzana", "Pera", "Sandia"];
let fruta = "Mango";
let vegetales = "Zanahoria";

console.log("Stock actual:");
console.log("Vegetales:", productosVegetales);
console.log("Frutas:", productosFrutas);

console.log("Nuevo cargamento:");
productosVegetales.push(vegetales);
productosFrutas.push(fruta);

console.log("Vegetales:", productosVegetales);
console.log("Frutas:", productosFrutas);

console.log("Se agotó el Gineo y la cebolla.");
console.log("Actualización:");

productosVegetales.pop();
productosFrutas.shift();

console.log("Vegetales:", productosVegetales);
console.log("Frutas:", productosFrutas);

console.log("Se realiza una consulta al stock para saber si hay manzanas.");

const encontrar = productosFrutas.includes("Manzana");

if (encontrar) {
    console.log("Sí hay manzanas.");
} else {
    console.log("No hay manzanas.");
}

console.log("Consultar si hay vegetales con 'P' para ordenar alfabéticamente.");
const nuevosVegetales = productosVegetales.filter((vegetal) => vegetal.includes('P'));

console.log("Vegetales con 'P':", nuevosVegetales);

console.log("Ordenar alfabéticamente los vegetales:");
productosVegetales.sort();
console.log("Vegetales ordenados:", productosVegetales);

console.log("Invertir el orden de los vegetales:");
productosVegetales.reverse();
console.log("Vegetales invertidos:", productosVegetales);
