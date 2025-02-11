/**
 * Tarea: Obten un docuemnto y cuenta la cantidad de palabras que tiene.
 * Tambien cuenta solo las palabras "react"
 */

//Libreria que permite trabajar con archivos/imagenes/etc
const fs = require("fs");

//Obtener el contenido de un archivo
const content = fs.readFileSync("README.md", 'utf8')

const words = content.split(" ") //Split genera un array mediante una forma de separacion, en este caso un espacio
console.log("Cantidad de palabras: ", words.length)

//Funcion para contar las palabras react
const reactCount = words.filter(word => word.toLowerCase() === "react").length
console.log("Cantidad de reacts: ", reactCount)