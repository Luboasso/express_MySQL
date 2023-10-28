const db = require("../config/database.js");

const CategoryController = {
    create(req, res) {
      let category = { name: req.body.name };
      let sql = "INSERT INTO categories SET ?";
      db.query(sql, category, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("category added...");
      });
    },

    update(req, res) {
        let newCategoryName = req.body.name;
        let sql = `UPDATE categories SET name = '${newCategoryName}' WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
          if (err) throw err;
          res.send("Category name updated...");
        });
      },
 };
  
  module.exports = CategoryController;