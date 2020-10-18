const Product = require("../models/product");

exports.view_product = async(req, res, next) => {
    var data = await Product.find({}).exec();
    if (data != null) {
        res.status(200).json({
            result: 1,
            data: data,
        });
    } else {
        res.status(400).json({
            result: 0,
            message: "Failed",
        });
    }
}

exports.add_product = async(req, res, next) => {
    var newProduct = new Product({
        productName: req.body.productName,
        productPrice: req.body.productPrice,
        productSize: req.body.productSize,
        category: req.body.category,
        productStock: req.body.productStock,
        productDescription: req.body.productDescription
    });

    await newProduct
        .save()
        .then(async(result) => {
            res.status(201).json({
                result: 1,
                message: "Product created successfully",
            });
        })
        .catch((err) => {
            res.status(400).json({
                result: 0,
                message: "Failed",
            });
        });
}

exports.update_product = async(req, res, next) => {
    await Product.update({ _id: req.body.id }, { $set: { productSize: [] } }, function(err, affected) {
        console.log('affected: ', affected);
    });
    await Product.updateOne({ _id: req.body.id }, {
            $set: {
                productName: req.body.productName,
                productPrice: req.body.productPrice,
                productSize: req.body.productUpdatedSize,
                category: req.body.category,
                productStock: req.body.productStock,
                productDescription: req.body.productDescription
            }
        }).exec()
        .then(async result => {
            res.status(200).json({
                result: 1,
                message: "Product Updated"
            });
        }).
    catch(err => {
        res.status(400).json({
            result: 0,
            message: "Failed"
        });
    });
};

exports.delete_product = async(req, res, next) => {
    await Product.deleteOne({ _id: req.body.id }).exec()
        .then(result => {
            res.status(200).json({
                result: 1,
                message: "Product deleted"
            });
        }).
    catch(err => {
        res.status(400).json({
            result: 0,
            message: "Failed"
        });
    });
}