const express = require("express");
const router = express.Router();

//const checkAuth = require("../middlewares/check-auth");
const sizeController = require("../controllers/category");

// Request handlers

router.get('/viewCategory', sizeController.view_category);
router.post('/addCategory', sizeController.add_category);
router.post('/updateCategory', sizeController.update_category);
router.post('/deleteCategory', sizeController.delete_category);

module.exports = router;