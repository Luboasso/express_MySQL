const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController.js');


router.post("/createproduct", ProductController.create);
router.post("/assigncategory", ProductController.assignCategory);
module.exports = router;
