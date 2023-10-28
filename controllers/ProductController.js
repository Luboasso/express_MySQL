const db = require("../config/database.js");

const ProductController = {
    create(req, res) {
      let product = { name: req.body.name, price: req.body.price, description: req.bdy.description };
      let sql = "INSERT INTO products SET ?";
      db.query(sql, product, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Product added...");
      });
    },
    getAll(req, res) {
      let sql = "SELECT * FROM posts";
      db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
      });
    },
    getById(req, res){
      let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
      db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
      });
    },

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
//     }
  };
  
  module.exports = ProductController;