const express = require("express");
const router = express.Router();

//const checkAuth = require("../middlewares/check-auth");
const userController = require("../controllers/user");

// Request handlers

router.post('/auth', userController.user_login);

module.exports = router;