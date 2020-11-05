const express = require('express');
const app = express();

require('dotenv').config();
const port = 3000;
//process.env.PORT || 



//Esta es la conexión con MongoDB
const mongoose = require('mongoose');


const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.lquq3.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

  mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log('Base de datos conectada'))
    .catch(e => console.log(e))



    //Sección de las vistas desde la carpeta VIEWS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');



//Con esta parte se llama cuando no hay nada en el buscador
//solo la página de 'inicio'..........
//con el EXPRESS.STATIC
app.use(express.static(__dirname + "/public"))
app.use(express.static(__dirname + "/CSS"))

//Rutas web
app.use('/', require('./router/RutasWeb'));
app.use('/mascotas', require('./router/mascotas'));



app.get('/', (req, res) => {
    res.render("index", {titulo : "Mi titulo de index"})
})

app.get('/service', (req, res)=>{
    res.render("service", {tituloService: "Esta es la parte del servicio"})
})



app.use((req, res, next) =>{
    res.status(404).render("404", {
        titulo: "404",
        descripcion: "Had made a mistake"
    })
})


//Esta es la variable que hace lectura para el servidor
app.listen(port, () =>{
    console.log('Este es el servidor escuchando')
})