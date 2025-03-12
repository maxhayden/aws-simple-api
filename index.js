import express from "express"

const app = express()

app.listen(5001, () => console.log("api running on port 50o1"));

app.get('/', (req, res) => res.json("the api is running"));