// Simulamos una "base de datos" en memoria con un array
let usuarios = [
  { id: 1, nombre: "Juan", email: "juan@mail.com" },
  { id: 2, nombre: "Maria", email: "maria@mail.com" },
];

// GET /usuarios
function getUsers(req, res) {
  res.json(usuarios);
}

// GET /usuarios/:id
function getUsuarioPorId(req, res) {
  const { id } = req.params;
  const usuario = usuarios.find((u) => u.id === Number(id));

  if (!usuario) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }

  res.json(usuario);
}

// POST /registro
function registrarUsuario(req, res) {
  const { nombre, email, password } = req.body;

  // Validación básica de datos
  if (!nombre || !email || !password) {
    return res.status(400).json({
      error: "Faltan datos obligatorios: nombre, email y password",
    });
  }

  const nuevoUsuario = {
    id: usuarios.length + 1,
    nombre,
    email,
  };

  usuarios.push(nuevoUsuario);

  res.status(201).json({
    mensaje: "Usuario registrado con éxito",
    usuario: nuevoUsuario,
  });
}

// POST /login
function login(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      error: "Debes enviar email y password",
    });
  }

  const usuario = usuarios.find((u) => u.email === email);

  if (!usuario) {
    return res.status(401).json({ error: "Credenciales inválidas" });
  }

  // Nota: en un proyecto real, la password se guarda hasheada
  // y se compara con bcrypt, nunca en texto plano como aquí.
  res.json({
    mensaje: "Login exitoso",
    usuario,
  });
}

module.exports = {
  getUsers,
  getUsuarioPorId,
  registrarUsuario,
  login,
};