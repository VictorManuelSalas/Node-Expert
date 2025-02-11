//Libreria que permite trabajar con archivos/imagenes/etc
const fs = require("fs");


//Obtener el contenido de un archivo
const data = fs.readFileSync("README.md", 'utf8') 

//Remplazar una plabra del docuemnto obtenido mediante una exprecion regular /React/ig
const newData = data.replace(/React/ig, "Angular")

//Crear un nuevo documento con la nueva informacion modificada
fs.writeFileSync("README-Angular.md", newData)

