# 🖥️ **Semana 2 — Tu primer servidor backend**

Esta semana marca el inicio del desarrollo backend.

El pasante aprenderá a crear servidores, rutas, controladores y endpoints reales usando **Node.js + Express**, el stack más usado en la industria para desarrolladores junior.

---

## 🎯 **Objetivos de Aprendizaje**

Al finalizar esta semana, el participante será capaz de:

- Crear un servidor backend con Express.
- Entender qué es un endpoint y cómo funciona.
- Crear rutas GET, POST, PUT y DELETE.
- Usar Postman / Thunder Client para probar APIs.
- Manejar parámetros, query params y body.
- Separar la lógica en controladores y servicios.
- Enviar y recibir JSON entre cliente y servidor.
- Manejar errores básicos con middleware.

---

## 📚 **Videos de la Semana 4**

### Introducción al Backend y Node.js

https://youtu.be/137Q1tSkZ-I?si=lQcN4B0pLqTDeO8t (backend)

https://youtu.be/VHOd-RBj1MA?si=13YDX9hhrjjSS2lJ (node.js)

### https://youtu.be/KwLTb7If0d4?si=jozFkyjl-oitjfOg(Servidor básico con Node.js y Express)

https://youtu.be/sGmpH99PJjM?si=h4lirIUPQ_5olUtM(Rutas y Endpoints)

https://youtu.be/VuTWlR3MRis?si=bcbRDbRd-NvvspOU(Mini API (Proyecto Final))

https://youtu.be/mpIU4u7_V0s?si=-R5l45QjF_vigD3t(Refactor, Documentación y Test Manual)

- ¿Qué es Node.js?
- ¿Qué es Express?
- Crear un servidor desde cero.
- Rutas y endpoints.
- Parámetros dinámicos.
- POST y lectura del body.
- Introducción a controladores.
- Testing con Postman / Thunder Client.

## 🧠 **Contenido de la Semana 4**

### 🔹 Crear un proyecto Node.js

```bash
mkdir backend-semana4
cd backend-semana4
npm init -y
npm install express

```

### 🔹 Crear un servidor básico

```jsx
const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto", PORT);
});

```

### 🔹 Crear una ruta GET

```jsx
app.get("/saludo", (req, res) => {
  res.json({ mensaje: "Hola desde el backend" });
});

```

### 🔹 Manejar parámetros

```jsx
app.get("/usuarios/:id", (req, res) => {
  const { id } = req.params;
  res.json({ usuario: id });
});

```

### 🔹 Leer datos del body

No olvidar:

```jsx
app.use(express.json());

```

Luego:

```jsx
app.post("/crear", (req, res) =>  {
  const datos = req.body;
  res.json({ recibido: datos });
});

```

### 🔹 Crear un controlador

```jsx
function obtenerUsuarios(req, res) {
  res.json([{ id: 1, nombre: "Juan" }]);
}

app.get("/usuarios", obtenerUsuarios);

```

## 🧪 **Tareas Obligatorias**

### **Tarea 1 — Crear un servidor funcional**

Debe incluir:

- `/` (GET)
- `/saludo` (GET)
- `/usuarios` (GET)
- `/usuarios/:id` (GET)

### **Tarea 2 — Crear endpoints POST**

Endpoints obligatorios:

- `POST /registro`
- `POST /producto`
- `POST /login`

Cada endpoint debe:

- Recibir un body JSON
- Validar los datos
- Responder con un objeto JSON

### **Tarea 3 — Mini controlador**

Crear carpeta:

```
/controllers

```

Archivo:

```
userController.js

```

Debe exportar una función “getUsers” y conectarse con la ruta `/usuarios`.

### **Tarea 4 — Probar todo con Postman o Thunder Client**

El estudiante debe enviar capturas de:

- GET funcionando
- POST funcionando
- Rutas dinámicas funcionando

## 🧪 **Mini Proyecto Semana 4 (Opcional)**

### **"API de Productos"**

Debe incluir:

- GET `/productos`
- GET `/productos/:id`
- POST `/productos`
- PUT `/productos/:id`
- DELETE `/productos/:id`

(No requiere base de datos, usar arrays locales).

## 📋 **Checklist de la Semana**

- [ ]  Instalé Express
- [ ]  Creé mi primer servidor
- [ ]  Creé rutas básicas
- [ ]  Usé parámetros dinámicos
- [ ]  Usé POST y body JSON
- [ ]  Probé todo con Postman
- [ ]  Entregué la actividad del Classroom
- [ ]  Recibí feedback técnico

## 💬 **Comunicación y Soporte**

Esta semana es clave:

Los estudiantes deben compartir:

- Capuras de Postman
- URL de su repositorio
- Dudas sobre rutas o controladores
- Avances diarios

## 📄 **Documentos Relacionados**

- Guía de Node + Express
- Documentación oficial de Express
- Ejemplos de backend básico

