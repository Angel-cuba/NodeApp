const express = require('express');
const router = express.Router();


const Mascota = require('../models/mascota');

router.get('/', async(req, res) => {

    try{
          const arrayMascotasDB = await Mascota.find()
          //console.log(arrayMascotasDB)

          res.render("mascotas", {
              arrayMascotas: arrayMascotasDB
          })


    }catch(error){
        console.log(error)
    }


    //res.render("mascotas", {
        //arrayMascotas: [
            //{id: 'avfva', nombre: 'perro', texto: 'kjanvanve'},
            //{id: 'jdjdf', nombre: 'gato', texto: 'fbbbrsbrw'},
          //  {id: 'adddd', nombre: 'perico', texto: 'yeyteteanve'} 
        //]
   // })
})



module.exports = router;