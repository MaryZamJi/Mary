//mostrar autores y guardar un nuevo autor

// primero debo importar el modelo aqui

const Autor = require("../models/autor.model");

module.exports.get_all = (req,res) =>{
    //si me dice q ordene alfabeticamente
    Autor.find().sort({nombre: 1}) //el .sort me ordena y adentro le coloco 1 es asendente y -1 desedente
    //una promesa
    .then(autores => res.json(autores))
    //si hay un error lo obtengo y ese error le voy a dar una respuesta
    .catch(err =>{
        res.status(400).json(err);//con el .json envio el error completo
    })

}

module.exports.create_autor = (req,res) =>{
    //aca recibo los datos del autor atraves de un body
    Autor.create(req.body)
    .then(autor => res.json(autor))
    .catch(err =>{
        res.status(400).json(err);
    })
}

module.exports.get_autor = (req,res) =>{
    //aca recibo el autor atraves de un id
    Autor.findOne({_id: req.params.id})
    .then(autor => res.json(autor))
    .catch(err =>{
        res.status(400).json(err);
    })
}

 module.exports.editar_autor = (req,res) =>{
     //aca recibo los datos del autor atraves de un body
     Autor.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
     .then(autor => res.json(autor))
     .catch(err =>{
         res.status(400).json(err);
     })
 }

 module.exports.eliminar_autor = (req,res) =>{
     //aca recibo los datos del autor atraves de un body
     Autor.deleteOne({_id: req.params.id})
     .then(result => res.json(result))
     .catch(err =>{
         res.status(400).json(err);
     })
 }