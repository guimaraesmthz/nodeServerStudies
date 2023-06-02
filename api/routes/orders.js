const express = require('express');
const router = express.Router();

router.get('/',((req,res,next)=>{
    res.status(200).json({
        message: 'Orders were fetched'
    })
}))

router.post('/:id',((req,res,next)=>{
    res.status(201).json({
        message: 'Order was created',
        id: req.params.id
    })
}))


module.exports = router;