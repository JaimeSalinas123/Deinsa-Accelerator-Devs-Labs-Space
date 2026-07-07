// "Base de datos" en memoria
let productos = [
  { id: 1, nombre: "Teclado", precio: 25 },
  { id: 2, nombre: "Mouse", precio: 15 },
];

// GET /productos
function getProductos(req, res) {
  res.json(productos);
}

// GET /productos/:id
function getProductoPorId(req, res) {
  const { id } = req.params;
  const producto = productos.find((p) => p.id === Number(id));

  if (!producto) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  res.json(producto);
}

// POST /productos (y también se usa para POST /producto)
function crearProducto(req, res) {
  const { nombre, precio } = req.body;

  if (!nombre || precio === undefined) {
    return res.status(400).json({
      error: "Faltan datos obligatorios: nombre y precio",
    });
  }

  if (typeof precio !== "number" || precio < 0) {
    return res.status(400).json({ error: "El precio debe ser un número positivo" });
  }

  const nuevoProducto = {
    id: productos.length + 1,
    nombre,
    precio,
  };

  productos.push(nuevoProducto);

  res.status(201).json({
    mensaje: "Producto creado con éxito",
    producto: nuevoProducto,
  });
}

// PUT /productos/:id
function actualizarProducto(req, res) {
  const { id } = req.params;
  const producto = productos.find((p) => p.id === Number(id));

  if (!producto) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  const { nombre, precio } = req.body;

  if (nombre === undefined && precio === undefined) {
    return res.status(400).json({
      error: "Envía al menos nombre o precio para actualizar",
    });
  }

  if (nombre !== undefined) producto.nombre = nombre;
  if (precio !== undefined) producto.precio = precio;

  res.json({
    mensaje: "Producto actualizado con éxito",
    producto,
  });
}

// DELETE /productos/:id
function eliminarProducto(req, res) {
  const { id } = req.params;
  const index = productos.findIndex((p) => p.id === Number(id));

  if (index === -1) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  const [eliminado] = productos.splice(index, 1);

  res.json({
    mensaje: "Producto eliminado con éxito",
    producto: eliminado,
  });
}

module.exports = {
  getProductos,
  getProductoPorId,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
};