const mongoose = require("mongoose");

//aca van todos los atributos del autor
const EsquemaAutor = new mongoose.Schema({
    //aca tambien van las validaciones
    nombre: {
        type: String, 
        required: [true,"Nombre obligatorio."],
        minLength: [3,"El nombre debe tener almenos 3 caracteres"]
    },
    imagen: {
        type: String

    },
    libros: {
        type: Boolean,
        default: false
    },
    cuentos: {
        type: Boolean,
        default: false
    },
    articulos: {
        type: Boolean,
        default: false
    }
}, {timestamps: true, versionKey: false});
//me crea campos de createdAt y updateAt
//el versionKey: false me elimina el atributo _v

const Autor = mongoose.model("autores", EsquemaAutor);

module.exports = Autor;