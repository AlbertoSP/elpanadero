const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const pedidoSchema = new Schema({
  direccion: String,
  latitud: Number,
  longitud: Number,
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('Pedido', pedidoSchema);