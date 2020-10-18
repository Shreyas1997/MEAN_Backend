const express = require("express");
const router = express.Router();

//const checkAuth = require("../middlewares/check-auth");
const productController = require("../controllers/product");

// Request handlers

router.get('/viewProduct', productController.view_product);
router.post('/addProduct', productController.add_product);
router.post('/updateProduct', productController.update_product);
router.post('/deleteProduct', productController.delete_product);

module.exports = router;