import express from "express"
import sql from "mssql"

const app = express()

const config = {
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    port: "3306",
    password: process.env.DBPASSWORD,
    database: process.env.DATABASE,
  };
  
  app.get("/connect", async (req, res) => {
    try {
        await sql.connect(config)
        const result = await sql.query`select * from products`;
        console.dir(result)
       } catch (err) {
        console.log(err);
       }
  });
  

app.listen(3000, () => console.log("api running on port 3000"));

app.get('/store-products', (req, res) => {
    res.json("product is being stored")
});

app.get('/list-products', (req, res) => {
    res.json("listing all products")
});
