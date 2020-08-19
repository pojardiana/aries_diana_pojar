'use strict'
const Product = require('../models/productModel');

module.exports = {
    getProducts,
    createProducts,
    getProductsById,
    deleteProduct
};

function getProducts(req, res, next) {
    console.log('GET Products');
    Product.find(function(err, result) {
        if(err) {
            console.log('err', err);
            return res.send('Some error from get products')
        }

        req.resources.products = result;
        next()
    })
}

function createProducts(req, res, next) {
    console.log('req.body',req.body);
    const product = new Product(req.body);

    product.save(function(err, result) {
        if(err) {
            return next(err)
        }
        req.resources.products = result;
        return next()
    });
}

function getProductsById(req, res, next) {
    Product.find({ _id: req.params.productId }, function(err, result) {
        if(err) {
            console.log('err', err);
            return res.send('ERROR from get products')
        }

        req.resources.products = result;
        next()
    })
}
function deleteProduct(req, res, next) {
    console.log('req.params', req.params);
    const { productId } = req.params;

    Product.deleteOne({_id: productId}, function(err, result) {
        if(err) {
            console.log('err', err)
            return res.send('ERROR  delete product')
        }

        next()
    })
}