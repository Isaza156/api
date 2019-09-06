//const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const serviSchema = new Schema({
    nombre: String,
    msj: String
},{timestamps:true});

const Servicio = mongoose.model('Servicio', serviSchema);

module.exports = {Servicio}

/// Serviteca > Servicios > Servicio