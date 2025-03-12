import express from "express"

const app = express()

app.listen(3000, () => console.log("api running on port 5001"));

app.get('/store-products', (req, res) => {
    res.json("product is being stored")
});

app.get('/list-products', (req, res) => {
    res.json("listing all products")
});