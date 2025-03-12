import express from "express";
import sql from "mysql";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const config = {
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    port: process.env.PORT,
    password: process.env.DBPASSWORD,
    database: process.env.DATABASE,
};

var con = sql.createConnection(config);

app.listen(80, () => console.log("api running on port 3000"));

app.post('/store-products', (req, res) => {
    const products = req.body.products;

    con.connect(function (err) {
        products.forEach((product) => {
            con.query(`INSERT INTO products (name, price, availability) VALUES ("${product.name}", "${product.price}", ${product.availability})`, function (err, result, fields) {
                console.log(err);
            });
        });
    });

    res.status(200);
    res.json({
        "message": "Success."
    })
});

app.get('/list-products', (req, res) => {
    con.connect(function (err) {
        con.query("SELECT * FROM products", function (err, result, fields) {
            console.log(err);
            res.status(200);
            res.json({"products":result});
        });
    });
});

app.get('/clear', (req, res) => {
    con.connect(function (err) {
        con.query("DELETE FROM products", function (err, result, fields) {
            console.log(err);
            res.status(200);
            res.json(result);
        });
    });
});
