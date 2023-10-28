const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController.js');


router.post("/createproduct", ProductController.create);
router.post("/assigncategory", ProductController.assignCategory);
router.put("/updateproduct/:id", ProductController.update);
module.exports = router;
