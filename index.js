const express = require("express");
const app = express();
const db = require("./config/database");
const PORT = 3000;

app.use(express.json());
app.use("/products", require("./routes/products"));


app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE expressDB";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Database created...");
  });
});

app.get("/createproducttable", (req, res) => {
  let sql =
    "CREATE TABLE products(id INT AUTO_INCREMENT,title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Products table created...");
  });
});

app.get("/createcategoriestable", (req, res) => {
    let sql =
      "CREATE TABLE categories(id INT AUTO_INCREMENT,title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))";
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Categories table created...");
    });
  });

app.listen(PORT, () => {
    console.log(`Servidor levantado en el puerto ${PORT}`);
});