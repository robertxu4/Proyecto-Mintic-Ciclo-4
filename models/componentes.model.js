const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ComponentesSchema = new Schema({
    componente_id:{type: String, required: true, max:60},
    tipo:{type: String, required: true, max:60},
    nombre:{type: String, required: true, max:60},
    cantidad:{type: Number, required: true, max:250},
    marca:{type: String, required: true, max:60},

});

module.exports = mongoose.model("componentes", ComponentesSchema); 