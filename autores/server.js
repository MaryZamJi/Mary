//creamos el server
//colocar en la terminal npm init -y esto crea el package.jason
//en el packsahe.json debe editar en el script donde dice 
//star se le pone nodemon en vez de node 
// para la instalacion de nodemon se ejecuta (npm install nodemon -g)ya no debo hacerlo
//instalar 3 cosas : instalra express, mongose y core
// npm install express mongose cors
// debo hacer una carpeta que se llame server y dentro debo hacer 4 carpetas
// models config controllers routes
// siempre se inicia por la configuracion
//luego sigue el modelo
//luego el controller que hace una funcion que guarde, actualice, borre 
//luego los routes
//de ultimo el server

//parte de frontend
//una vez que el server este funcionando creo el otro server de react(cliente)
// con este comando npx create-react-app client , debe salir happy hacking

//debo tener dos terminales abiertas la primera de autores y la 
//segunda donde inicializo el cliente
// luego de estar en cd client debo poner npm install axios react-router-dom
//en el index cambio el titulo por el de la app
//debo agregar lo del BrowserRoutes
//agrego el link de bootstrap
//cambio el app por la forma que usamos 

const express = require("express");
const app = express();// la app principal la hago a traves de express
const cors = require("cors");//me permite consultar la url desde otros lugares
app.use(express.json(),express.urlencoded({extended:true}));

app.use(
    cors({
        //url de react
        origin: "http://localhost:3000"
    })
)

//inicializar rutas
require("./server/config/mongose.config");

//importar rutas
const misRutas = require("./server/routes/autor.routes");
misRutas(app);

//ejecuto el server
app.listen(8000, ()=>console.log("servidor listo !"));
