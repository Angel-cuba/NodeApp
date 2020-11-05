const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const mascotaSchema = new Schema({
    nombre: String,
    texto: String,
    descripcion: String
})

//crear mi modelo
const Mascota = mongoose.model('Mascota', mascotaSchema);

module.exports = Mascota;