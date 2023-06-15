const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const  Order = require('../models/orders');

router.get('/',((req,res,next)=>{
    res.status(200).json({
        message: 'Orders were fetched'
    })
}))

router.post('/:id',((req,res,next)=>{
    const order = new Order({
        _id: mongoose.Types.ObjectId(),
        quantity: req.body.quantity,
        product: req.body.productId
    })
    order.save().then(()=>{
        res.status(201).json({
            message: 'Order was created'
        })
    }).catch(()=>{
        res.status(400).json({
            message: 'Order was not created'
        })
    })
    
}))


module.exports = router;