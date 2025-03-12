import express from "express"
import sql from "mysql"
import dotenv from "dotenv";
dotenv.config();

const app = express()

console.log(config);

var con = sql.createConnection(config);

app.listen(80, () => console.log("api running on port 3000"));

app.get('/store-products', (req, res) => {
    res.status(200);
    res.json({
        "message": "Success."
     })
});

app.get('/list-products', (req, res) => {
    con.connect(function (err) {
        con.query("SELECT * FROM products", function (err, result, fields) {
            res.status(200);
            res.json(result);
        });
    });
});

app.get('/clear', (req, res) => {
    con.connect(function (err) {
        con.query("DELETE * FROM products", function (err, result, fields) {
            res.status(200);
            res.json(result);
        });
    });
});
