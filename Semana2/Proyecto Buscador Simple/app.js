const input = document.querySelector("#inputId");
const btn = document.querySelector("#btnBuscar");
const resultado = document.querySelector("#resultado");

//Logica Obtener datos (fetch)
async function buscarUsuario(id) {
    try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

        if (!res.ok) throw new Error("Usuario no encontrado");

        return await res.json();
    } catch (error) {
        throw error; //Lanzamos el error para manejarlo en la funcion principal
    }
}

//Vista: renderizar tarjeta
function pintarTarjeta(user) {
    resultado.innerHTML = `
        <div class="tarjeta">
            <h3>${user.name}</h3>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Compañía:</strong> ${user.company.name}</p>
        </div>
    `;
}

//Orquestador: El puedente entre el boton y la api
btn.addEventListener("click", async () => {
    const id = input.value;

    //limpiamos antes de empezar
    resultado.innerHTML = "buscando...";

    try {
        const usuario = await buscarUsuario(id);
        pintarTarjeta(usuario);
    } catch (error) {
        resultado.innerHTML = `<p style="color:red">⚠️ ${error.message}</p>`;
    }
})