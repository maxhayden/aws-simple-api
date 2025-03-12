import express from "express"

const app = express()

app.listen(5001, () => console.log("api running on port 50o1"));

app.get('/store-products', (req, res) => res.json("product is being stored"));

app.get('/list-products', (req, res) => res.json("listing all products"));