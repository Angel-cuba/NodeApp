const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render("mascotas", {
        arrayMascotas: [
            {id: 'avfva', nombre: 'perro', texto: 'kjanvanve'},
            {id: 'jdjdf', nombre: 'gato', texto: 'fbbbrsbrw'},
            {id: 'adddd', nombre: 'perico', texto: 'yeyteteanve'}

            
        ]
    })
})



module.exports = router;