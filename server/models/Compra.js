const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const compraSchema = new Schema({
    producto: [{
        nombre: String,
        cantidad: Number,
        preciounidad: Number,
        total:Number
    }],

    totalcompra: String,
    nombrerepartidor: String

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const Compra = mongoose.model('Compra', userSchema);
module.exports = Compra;