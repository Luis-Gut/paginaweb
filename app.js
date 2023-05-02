
const express = require('express');
const app = express();

const port = 3000;

//Plantilla Motor//
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) =>{
    res.render("index",{titulo: ""})
})

app.get("/contamina", (req, res) =>{
    res.render("contamina",{titulo: "Hola WORLD"})
})

app.get("/contacto", (req, res) =>{
    res.render("contacto",{titulo: "Contacto"})
})

app.get("/terms", (req, res) =>{
    res.render("terms",{titulo: "Terminos y Condiciones"})
})

app.get("/importancia", (req, res) =>{
    res.render("importancia",{titulo: "Importancia"})
})

app.get("/privacity", (req, res) =>{
    res.render("privacity",{titulo: "Privacidad"})
})

app.get("/curso", (req, res) =>{
    res.render("curso",{titulo: "Curso"})
})

app.get("/somos", (req, res) =>{
    res.render("somos",{titulo: "Quienes somos"})
})



app.listen(port, () => {
    console.log("Listening on port",port)
})