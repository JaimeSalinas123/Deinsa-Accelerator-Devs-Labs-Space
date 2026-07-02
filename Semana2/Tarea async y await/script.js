//Funcion encargada solo de obtener datos (Logica del negocio)
async function fetchUserData(userID) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

        //En esta funcion verificamos si la respuesta del servidor fue exitosa
        if (!response.ok) {
            throw new Error("No pudimos encontrar al usuario solicitado");
        }

        const data = await response.json();

        //devolvamos datos limpios 
        return {
            nombre: data.name,
            email: data.email,
            ciudad: data.address.city,
            empresa: data.company.name
        };
    } catch (error) {
        //lanzamos el error para que el quien llame a la funcion lo maneje
        throw error;
    }
}

//Funcion principal para ejecutar la tarea
async function ejecutarTarea() {
    try {
        const usuario = await fetchUserData(1); // traemos al usuario con ID1
        console.log("Datos limpios recibidos:", usuario);

        //Aqui podria llamar a una funcion para renderizar
    } catch(error) {
        console.error("Hubo un fallo en la operación:", error.message);
    }
}

ejecutarTarea();