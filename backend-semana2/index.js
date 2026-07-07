const express = require('express');
const userController = require('./controllers/userController');
const productController = require('./controllers/productController');

const app = express();
const PORT = 3000;

//middleware para poder leer JSON en el body de las peticiones
app.use(express.json());

// Rutas para usuarios
//Rutas Get Basicas
app.get('/', (req, res) => {
  res.json({ mensaje: "API funcionando 🚀" });
});

app.get('/saludo', (req, res) => {
  res.json({ mensaje: "Hola, bienvenido a la API!" });
});

app.get('/usuarios', userController.getUsers);
app.get('/usuarios/:id', userController.getUsuarioPorId);

//Endpoint Post
app.post("/registro", userController.registrarUsuario);
app.post("/login", userController.login);
app.post("/producto", productController.crearProducto);

//Api de productos (CRUD COMPLETO)
app.get("/productos", productController.getProductos);
app.get("/productos/:id", productController.getProductoPorId);
app.post("/productos", productController.crearProducto);
app.put("/productos/:id", productController.actualizarProducto);
app.delete("/productos/:id", productController.eliminarProducto);

//Middleware para manejar errores
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

//Middleware para manejar errores internos del servidor
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Algo salió mal en el servidor" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});