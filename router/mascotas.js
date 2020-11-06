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
})


//No funcionaaaaaaaaaaaaaaaaaaaaaa
router.get('/crear',(req, res) => {
  res.render("crear")
})


//Desde aqui se llenan todos los campos que utilizan en la base datos
router.post('/', async (req, res) => {
    const body = req.body


    //Funcion que se utiliza para hacer el cuerpo de todos los valores que vamos a utilizaer 
    //en la base de dartos los cuales ya están definidos
    //***IMPORTANTE***//
    //Deben ser los mismos campos en el Schema y en la tabla para que se puedaq visualizar
    try{
          const mascotaDB = new Mascota(body)
          await mascotaDB.save(); 

          //OTRO METODO PARA ACTUALIZAR db
          //await Mascota.create(body)

          //console.log(mascotaDB)
          res.redirect('/mascotas')

    }catch(error){
        console.log(error)
    }
})


//Visualiza un ID  de cada elemento para que pueda ser utilizar en DELETE Y PUT(update)
//Identificar cada elemento ById *********ID**********
router.get('/:id', async (req, res) => {
         const id = req.params.id

    try{
     const mascotaDB = await Mascota.findOne({_id: id})
     console.log(mascotaDB) 
     
     res.render('detalle', {
         mascota: mascotaDB,
         error:false
     })

    }
    catch(error){
        console.log(error)

        res.render('detalle', {
            error:true,
            mensaje: 'No se encuentra el id seleccionado'
        })

    }
})


//Con esto se elimina el campo CON EL VERBO ***********DELETE************
router.delete('/:id', async (req, res) =>{
    const id= req.params.id

    try{

        //Funcion de *******************DELETE**************
             const mascotaDB = await Mascota.findByIdAndDelete({_id:id})
             if(mascotaDB){
                 res.json({
                     estado:true,
                     mensaje: 'eliminado'
                 })
             }else{
                 res.json({
                     estado:false,
                     mensaje: 'Fallo al eliminar!'
                 })
             }
    }
    catch(error){
        console.log(error)
    }
})


//Aqui hago el **************UPDATE**************

router.put('/:id', async (req,res) =>{
    const id = req.params.id
    const body = req.body

    try{
          const mascotaDB = await Mascota.findByIdAndUpdate(
              id, 
              body, 
              { userFindAndModify: false }
          )
          console.log(mascotaDB)

          //Respuesta en JSON
          res.json({
              estado: true,
              mensaje: 'Editado'
          })
            

    }
    catch(error){
        console.log(error)

         //Respuesta en JSON
         res.json({
            estado: false,
            mensaje: 'Error al editar!!'
        })
          
    }
})

module.exports = router;