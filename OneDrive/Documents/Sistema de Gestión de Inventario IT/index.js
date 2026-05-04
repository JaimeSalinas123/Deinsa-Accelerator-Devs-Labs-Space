const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Middlewares
app.use(cors());
app.use(express.json());

//ruta para crear un equipo (POST)
app.post('/equipos', (req, res) => {

    //extraemos los datos que se envian desde el postman 
    const { nombre, categoria, estado } = req.body;

    //consulta sql
    const sql = 'INSERT INTO equipos (nombre, categoria, estado) VALUES (?, ?, ?)';

    //se ejecuta la consulta en la base de datos
    db.query(sql, [nombre, categoria, estado], (err, result) => {
        if (err) {
            console.error('Erro al insertar equipo:' , err);
            return res.status(500).json({ error: 'Error al guardar en la base de datos'});
        }

        // responde que todo salio bien 
        res.status(201).json({
            mensaje: 'Equipo registrado exitosamente',
            id_insertado: result.insertId
        });
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})