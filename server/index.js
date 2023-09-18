const express = require("express")
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const bd = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root123",
    database:"controle_estoque",
    insecureAuth: true,
});

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) =>{
    const {nomel} = req.body;
    const {valor} = req.body;
    const {categoria} = req.body;
    const {quantidade} = req.body;

    let SQL = "INSERT INTO produtos (nomel, valor, categoria, quantidade) VALUES(?, ?, ?, ?)";

    bd.query(SQL, [nomel,valor,categoria,quantidade], (err, result) =>{
        console.log(err);
    })
});

app.listen(3001, () => {
    console.log("rodando servidor port 3001")
});