import express from "express"
import sql from "mysql"
import dotenv from "dotenv";
dotenv.config();

const app = express()

const config = {
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    port: process.env.PORT,
    password: process.env.DBPASSWORD,
    database: process.env.DATABASE,
  };

  var con = sql.createConnection(config);
  
  app.get("/connect", async (req, res) => {
    con.connect(function(err) {
        console.log(err);
      });
  });
  

app.listen(3000, () => console.log("api running on port 3000"));

app.get('/store-products', (req, res) => {
    res.json("product is being stored")
});

app.get('/list-products', (req, res) => {
    res.json("listing all products")
});
