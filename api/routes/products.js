const express = require('express');
const router = express.Router();
const Product = require('../models/product')

router.get('/',((req,res,next)=>{
    res.status(200).json({
        message: 'Handling get to /products'
    })
}))

router.post('/newProduct',((req,res,next)=>{
    const name = req.body.name;
    const price = req.body.price;
    const product  = new Product({
        name: name,
        price: price
    })
    product.save().then(()=>{
        res.status(200).json({
            message: ` Produto ${name} adicionado com sucesso.`
        })
    }).catch(()=>{
        res.status(400).json({
            message: ` Ocorreu um erro ao adicionar o produto.`
        })
    });
    
}))

router.patch

module.exports = router;
