const db = require("../config/database.js");

const CategoryController = {
    create(req, res) {
      let category = { category_name: req.body.category_name };
      let sql = "INSERT INTO categories SET ?";
      db.query(sql, category, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("category added...");
      });
    },

    update(req, res) {
        let newCategoryName = req.body.category_name;
        let sql = `UPDATE categories SET category_name = '${newCategoryName}' WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
          if (err) throw err;
          res.send("Category name updated...");
        });
      },

      getAll(req, res) {
        let sql = "SELECT * FROM categories";
        db.query(sql, (err, result) => {
          if (err) throw err;
          res.send(result);
        });
      },

      getById(req, res) {
        let sql = `SELECT * FROM categories WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
          if (err) throw err;
          res.send(result);
        });
      },
 };
  
  module.exports = CategoryController;