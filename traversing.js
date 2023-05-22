'use strict'

//Se crea un arreglo con sugerencias de amistad en Facebook
const solicitudesDeAmistad = ["Ana Maria   ","Oswaldo Luca","Adrian Perez","Roxi Simbaña","Mateus Messi"];

// Se realiza un conteo
for (let i = 0; i < solicitudesDeAmistad.length; i++) {
    (solicitudesDeAmistad[i]);
}

// Mostrar los amigos los amigos en comun 
solicitudesDeAmistad.forEach((amigos, index) => {
    console.log(`${index} - ${amigos}`);
});

// Crear una secion para enviar solicitudes de amistad
const newSolicitudes = solicitudesDeAmistad.map((amigos) => `|Enviar|  ${amigos}  |Ignorar|`);
console.log("Sugerencias: ")
console.log(solicitudesDeAmistad);
console.log("Solicitudes: ")
console.log(newSolicitudes);
