const db = require("../config/database.js");

const ProductController = {
    create(req, res) {
      let product = { name: req.body.name, price: req.body.price, description: req.body.description };
      let sql = "INSERT INTO products SET ?";
      db.query(sql, product, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Product added...");
      });
    },

    assignCategory(req, res) {
      let categoryproduct = { product_id: req.body.product_id, category_id: req.body.category_id };
      let sql = "INSERT INTO categoriesproducts SET ?";
      db.query(sql, categoryproduct, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Category assigned...");
      });
    },

    update(req, res) {
        let updatedProduct = req.body;
        let sql = `UPDATE products SET ? WHERE id = ${req.params.id}`;
        db.query(sql, updatedProduct,(err, result) => {
          if (err) throw err;
          console.log(result);
          res.send("Product updated...");
        });
      },
};
  
  module.exports = ProductController;
    // getAll(req, res) {
    //   let sql = "SELECT * FROM posts";
    //   db.query(sql, (err, result) => {
    //     if (err) throw err;
    //     res.send(result);
    //   });
    // },
    // getById(req, res){
    //   let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
    //   db.query(sql, (err, result) => {
    //     if (err) throw err;
    //     res.send(result);
    //   });
    // },

//     update(req, res) {
//       let newTitle = req.body.title;
//       let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
//       db.query(sql, (err, result) => {
//         if (err) throw err;
//         res.send("Post updated...");
//       });
//     },
//     delete(req, res){
//       let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
//       db.query(sql, (err, result) => {
//         if (err) throw err;
//         res.send("Post deleted");
//       });
//     
 