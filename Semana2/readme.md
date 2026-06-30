# 🌐 **Semana 2 — Consumo de APIs y Manejo de Datos**

En esta semana aprenderás a interactuar con APIs, trabajar con datos reales en formato JSON y construir aplicaciones que consumen información desde internet.

---

## 🎯 **Objetivos de Aprendizaje**

Al finalizar esta semana, el participante será capaz de:

- Entender qué es una API y cómo funciona.
- Realizar solicitudes HTTP usando `fetch()`.
- Consumir APIs públicas y manejar respuestas JSON.
- Utilizar métodos HTTP: GET, POST, PUT, DELETE.
- Manejar errores en peticiones.
- Renderizar datos dinámicamente en el frontend.
- Entender asincronía, promesas y `async/await`.

---

## 📚 **Videos de la Semana 3**

Qué es una API + JSON-

https://youtu.be/x3k2kd9j79c?si=-5n1ByStMO6gbe0Y (api)

https://youtu.be/cA5sofwLAjY?si=72D3xR1GxV6HYUSI (json)

https://youtu.be/8mWm8WxBhEY?si=W2Dh_Y5VfoQV-v7H(Fetch básico (GET))

https://youtu.be/Jh-LUQMwtRk?si=ABP9k-xS0Ng5w0ou(Mostrar datos en el DOM)

https://youtu.be/2Xm9P_tXtK8?si=aD-a4icMYd5YVE2N(Proyecto: Consumo de API real)

https://youtu.be/Hm10gE-yma8?si=SlyfVptjeq3uqPIZ(Integración + Refactor)

- ¿Qué es una API?
- ¿Qué es JSON y cómo se usa?
- Cómo usar `fetch()` en JavaScript.
- Consumir APIs públicas (ejemplo: PokeAPI, Rick & Morty API, JSONPlaceholder).
- Uso de `async` y `await`.
- Manejo básico de errores.
- Crear una interfaz simple que muestre datos.

## 🧠 **Contenido de la Semana 3**

### 🔹 ¿Qué es una API?

Una API permite que tu aplicación obtenga datos desde otro servidor

### 🔹 Solicitud básica con Fetch

```jsx
fetch("https://pokeapi.co/api/v2/pokemon/1")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));

```

---

### 🔹 Usando async/await

```jsx
async function getPokemon() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/4");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

getPokemon();

```

---

### 🔹 Renderizar datos en pantalla

```jsx
const container = document.querySelector("#resultado");

function renderUser(user) {
  container.innerHTML = `
    <h2>${user.name}</h2>
    <p>Email: ${user.email}</p>
  `;
}

```

### 🔹 Métodos HTTP

- **GET** — obtener datos
- **POST** — enviar datos
- **PUT** — actualizar datos
- **DELETE** — eliminar datos

## 🧪 **Tareas Obligatorias**

### **Tarea 1 — Consumir una API pública**

Elige una API pública:

- PokeAPI
- Rick & Morty API
- Digimon API
- JSONPlaceholder

Debes:

1. Consumir un endpoint
2. Mostrar 5 datos en pantalla
3. Renderizar lista + imagen (si existe)
4. Añadir botón para recargar información

### **Tarea 2 — Crear una función `async/await`**

Debes crear una función que:

- Haga un fetch
- Maneje errores
- Devuelva datos limpios

### **Tarea 3 — Proyecto obligatorio: “Buscador simple”**

Crear una interfaz que permita:

- Escribir un nombre/ID en un input
- Buscar datos en una API
- Renderizarlos en una tarjeta visual
- Mostrar mensaje de error si el dato no existe

## 🧪 **Mini Proyecto Semana 3 (Opcional)**

### **“Mini App de Personajes”**

Incluye:

- Barra de búsqueda
- Paginación
- Tarjetas dinámicas
- Loader de carga
- Manejo de errores
- Diseño simple con CSS

(Puede usarse API Rick & Morty)

## 📋 **Checklist de la Semana**

- [ ]  Entiendo qué es una API
- [ ]  Sé usar fetch()
- [ ]  Entiendo JSON
- [ ]  Puedo usar async/await
- [ ]  Puedo renderizar datos dinámicos
- [ ]  Realicé las tareas obligatorias
- [ ]  Subí mi entrega a GitHub Classroom
- [ ]  Recibí retroalimentación del líder

## 💬 **Comunicación y Soporte**

El pasante debe:

- Subir capturas del proyecto
- Reportar errores con claridad
- Compartir commits diarios
- Solicitar feedback antes de avanzar

## 📄 **Documentos Relacionados**

- Guía de Fetch API
- APIs públicas recomendadas
- Ejercicios adicionales