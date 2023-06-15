const express = require('express');
const app = express();
const productRoutes = require('./api/routes/products');
const ordersRoutes = require('./api/routes/orders');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./api/routes/user');

mongoose.connect("mongodb://admin:admin@ac-u2lunrg-shard-00-00.fjdtoxl.mongodb.net:27017,ac-u2lunrg-shard-00-01.fjdtoxl.mongodb.net:27017,ac-u2lunrg-shard-00-02.fjdtoxl.mongodb.net:27017/?ssl=true&replicaSet=atlas-1bozvm-shard-0&authSource=admin&retryWrites=true&w=majority");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/products',productRoutes);
app.use('/orders',ordersRoutes);
app.use('/user',userRoutes);

module.exports = app;