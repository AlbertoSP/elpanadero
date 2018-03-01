const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

const debug = require('debug')("server:auth");
const passport = require('passport')


router.get('/list', (req, res, next) => {
    
      Product.find()
      .then(products => res.status(200).json(products))
      .catch(err => res.status(500).json({
        message: "Error al recuperar la lista de productos",
        error: err
      }))
      
});

/* Crea un nuevo producto en base de datos y lo devuelve en formato de JSON.
Es un post porque le paso valores en el body */
router.post('/new', (req, res, next) => {
    const { name, price } = req.body
    const product = new Product({ 
        name: name,
        price: price
    });
    
    product.save()
    .then(newProduct => res.status(200).json(newProduct))
    .catch(err => res.status(500).json({
      message: "Error al crear el producto",
      error: err
    }))
    
});
//toma la id del producto para mostrarlo 
router.get('/:id', (req, res, next) => {
    const id = req.params.id

    Product.findById(id)
    .then(product => res.status(200).json(product))
    .catch(err => res.status(500).json({
      message: "Error al recuperar la lista de productos",
      error: err
    }))
    
});
// toma el id y podemos editar los parametros y lo actualiza y devuelve el actualizado con el "{new: true}"
router.post('/:id/edit', (req, res, next) => {
    const productId = req.params.id;
    const { name, price } = req.body

    Product.findByIdAndUpdate(productId, { name, price }, {new:true})
    .then(product => res.status(200).json(product))
    .catch(err => res.status(500).json({
        message: "Error al recuperar la lista de productos",
        error: err
      }))
  });
module.exports = router;
