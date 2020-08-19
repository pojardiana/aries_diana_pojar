'use strict'

const express = require('express');
const router = express.Router();

const productCtrl = require('../controllers/productsCtrl');
const commonCtrl = require('../controllers/commonCtrl');

function isAdmin (req, res, next){
    if(false){
        console.log('Only Admin');
        next();
    } else {
        next ("nu aveti access");
    }
}

router.get('/products', isAdmin, productCtrl.getProducts, commonCtrl.responseToJSON('products'));

router.post('/products', productCtrl.createProducts, commonCtrl.responseToJSON('products'));

router.delete('/products/:productId', productCtrl.getProductsById, productCtrl.deleteProduct, commonCtrl.responseToJSON('products'));
//
// router.put('/products/:productId', productCtrl.updateProduct, commonCtrl.responseToJSON('products'));

module.exports = router;
