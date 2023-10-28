const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController.js');

router.get("/", ProductController.getAll);
router.get("/getAllCategoriesProducts", ProductController.getAllCategoriesProducts);
router.get("/getById/:id", ProductController.getById);
router.get("/orderDesc", ProductController.orderDesc);
router.get("/getByName/:product_name", ProductController.getByName);
router.post("/createproduct", ProductController.create);
router.post("/assigncategory", ProductController.assignCategory);
router.put("/updateproduct/:id", ProductController.update);
module.exports = router;
