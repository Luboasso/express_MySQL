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
 };
  
  module.exports = CategoryController;