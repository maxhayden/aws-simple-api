import express from "express"

const app = express()

const config = {
    user: "admin",
    password: "ayl3yh23",
    server: "two-tier-app-db.cwnjetnzxoed.us-east-1.rds.amazonaws.com",
    database: "appDB",
  };
  
  app.get("/", async (req, res) => {
      try {
          await sql.connect(config);
          res.send("DB Connected");
      } catch(err)
      {
          res.send(err);
      }
  });
  

app.listen(3000, () => console.log("api running on port 5001"));

app.get('/store-products', (req, res) => {
    res.json("product is being stored")
});

app.get('/list-products', (req, res) => {
    res.json("listing all products")
});


const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`service is running on:: [${port}]`);
  });