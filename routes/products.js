const express = require('express');
const router = express.Router();
const db = require('../config/database.js');
const ProductController = require('../controllers/ProductController.js');


// router.post("/", ProductController.create);
module.exports = router;