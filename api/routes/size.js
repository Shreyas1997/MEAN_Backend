const express = require("express");
const router = express.Router();

//const checkAuth = require("../middlewares/check-auth");
const sizeController = require("../controllers/size");

// Request handlers

router.get('/viewSize', sizeController.view_size);
router.post('/addSize', sizeController.add_size);
router.post('/updateSize', sizeController.update_size);
router.post('/deleteSize', sizeController.delete_size);

module.exports = router;