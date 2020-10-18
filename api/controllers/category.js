const Category = require("../models/category");

exports.view_category = async(req, res, next) => {
    var data = await Category.find({}).exec();
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

exports.add_category = async(req, res, next) => {
    var newCategory = new Category({
        categoryName: req.body.categoryName,
    });

    await newCategory
        .save()
        .then(async(result) => {
            res.status(201).json({
                result: 1,
                message: "Category created successfully",
            });
        })
        .catch((err) => {
            res.status(400).json({
                result: 0,
                message: "Failed",
            });
        });
}

exports.update_category = async(req, res, next) => {
    await Category.updateOne({ _id: req.body.id }, {
            $set: {
                categoryName: req.body.categoryName,
            }
        }).exec()
        .then(async result => {
            res.status(200).json({
                result: 1,
                message: "Category Updated"
            });
        }).
    catch(err => {
        res.status(400).json({
            result: 0,
            message: "Failed"
        });
    });
};

exports.delete_category = async(req, res, next) => {
    await Category.deleteOne({ _id: req.body.id }).exec()
        .then(result => {
            res.status(200).json({
                result: 1,
                message: "Category deleted"
            });
        }).
    catch(err => {
        res.status(400).json({
            result: 0,
            message: "Failed"
        });
    });
}