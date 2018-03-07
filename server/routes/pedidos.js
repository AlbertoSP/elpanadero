const express = require('express');
const router = express.Router();
const Pedido = require('../models/Pedido');

const debug = require('debug')("server:auth");
const passport = require('passport')
       

router.get('/listpedidos', (req, res, next) => {
    console.log('entra en el router get')
    Pedido.find().exec( (err, pedidos) => {
        if (err ) {return res.status(500).json(err)}
        return res.status(200).json(pedidos)
    })
});




router.post('/nuevopedido', (req, res, next) => {
    const { name, price, latitud, longitud} = req.body
    const nuevopedido = new Pedido({ 
        name: name,
        price: price,
        latitud: latitud,
        longitud: longitud
    });
    
    nuevopedido.save()
    .then(nuevoPedido => res.status(200).json(nuevoPedido))
    .catch(err => res.status(500).json({
      message: "Error al crear el producto",
      error: err
    }))
    
});

module.exports = router;
