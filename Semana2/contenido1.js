//Consumo ed api y manejo de datos

//Que es una API?
//Una api permite que tu aplicacion obtenga datos desde el servidor

/*
Tambien permite que dos apliciones, modulos ETC. Se comuniquen entre si, actuando como un intermediario que recibe
una solicitud de un cliente, la procesa y devuelve una respuesta estrucuturada.
*/

//Solicitud basica con Fetch
fetch("https://pokeapi.co/api/v2/pokemon/1")
    .then(Response => Response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));

//Usando async y await
async function getPokemon() {
    try {
        const response = await fetch ("https://pokeapi.co/api/v2/pokemon/4");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}

getPokemon();

//Renderizar datos en pantalla
const container = document.querySelector("#resultado");

function renderUser(user) {
    container.innerHTML = `
    <h2>${user.name}</h2>
    <p>Email: ${user.email}</p>
  `;
}

//Metodos HTTP
/*
GET: Obtener Datos
POST: Enviar Datos
PUT: Actualizar Datos
DELETE: Eliminar Datos
*/


