const express = require("express");
const app = express();
const PORT = 3000;

//Importante: Middleware para leer json 
//Esta linea va antes de las rutas
app.use(express.json());

//Nuevo controlador
function obtenerUsuarios( req, res) {
    res.json([{ id: 1, nombre: "Juan" }])
}

//rutas app get
app.get("/saludo", (req, res) => {
    res.json({ mensaje: "Hola desde el backend"});
});

//mensaje de backend en el navegador
/*
http://localhost:3000/saludo
{"mensaje":"Hola desde el backend"}
*/

app.get("/usuarios", obtenerUsuarios);

//mensaje parametros
app.get("/usuarios/:id", (req, res) => {
    const { id } = req.params;
    res.json({ usuario: id });
});

//mensaje de backend en el navegador
/*
http://localhost:3000/usuarios/id
{"usuario":"id"}
*/

//Nueva ruta post
app.post("/crear", (req, res) => {
    const datos = req.body //aca se pueden leer datos gracias a express
    console.log("Datos Recibidos", datos); //se veran datos en terminal 
    res.json({ mensaje: "Datos recibidos correctamente", datos: datos });
});

//app listen siempre debe ir al final 
app.listen(PORT, () => {
    console.log("Servidor corriendo en puerto", PORT);
});

//mensaje servidor
/*
PS C:\Users\Documents\DeinsaSemanas\semana2.1\backend-semana2> NODE INDEX.JS
Servidor corriendo en puerto 3000
*/




