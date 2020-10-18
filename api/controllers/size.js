const Size = require("../models/size");

exports.view_size = async(req, res, next) => {
    var data = await Size.find({}).exec();
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

exports.add_size = async(req, res, next) => {
    var newProduct = new Size({
        sizeName: req.body.sizeName,
    });

    await newProduct
        .save()
        .then(async(result) => {
            res.status(201).json({
                result: 1,
                message: "Size created successfully",
            });
        })
        .catch((err) => {
            res.status(400).json({
                result: 0,
                message: "Failed",
            });
        });
}

exports.update_size = async(req, res, next) => {
    await Size.updateOne({ _id: req.body.id }, {
            $set: {
                sizeName: req.body.sizeName,
            }
        }).exec()
        .then(async result => {
            res.status(200).json({
                result: 1,
                message: "Size Updated"
            });
        }).
    catch(err => {
        res.status(400).json({
            result: 0,
            message: "Failed"
        });
    });
};

exports.delete_size = async(req, res, next) => {
    await Size.deleteOne({ _id: req.body.id }).exec()
        .then(result => {
            res.status(200).json({
                result: 1,
                message: "Size deleted"
            });
        }).
    catch(err => {
        res.status(400).json({
            result: 0,
            message: "Failed"
        });
    });
}