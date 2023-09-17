// aca van las rutas q es lo que me indica a donde debo ir 
//o que debo invocar 

const AutorController =require("../controllers/autor.controller");

module.exports = app =>{
    app.get('/api/autores', AutorController.get_all);//invoco al metodo que me trae los autores
    app.post('/api/autores', AutorController.create_autor);// invoco al metodo que me crea autores
    app.get('/api/autores/:id', AutorController.get_autor);
    app.put('/api/autores/:id', AutorController.editar_autor);// invoco al metodo que me edita autores
    app.delete('/api/autores/:id', AutorController.eliminar_autor);// invoco al metodo que me elimina autores
}