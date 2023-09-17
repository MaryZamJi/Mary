// aca debo copiar y pegar esto 
// si da error en localhost se cambia por 127.0.0.1:27017
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/autores_cr", {// en autores iria el nombre de la base de datos
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Conectado a DB"))
    .catch(err => console.log("Error al conectarse a DB", err));