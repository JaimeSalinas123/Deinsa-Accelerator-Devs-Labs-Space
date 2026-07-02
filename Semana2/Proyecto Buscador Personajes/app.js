let currentPage = 1;
const grid = document.querySelector('#grid');
const loader = document.querySelector('#loader');
const searchInput = document.querySelector('#searchInput');
const searchBtn = document.querySelector('#searchBtn');

async function fetchCharacters(page = 1, name = "") {
    try {
        loader.style.display = 'block';
        // Aquí concatenamos el nombre si existe
        const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`);
        
        if (!res.ok) throw new Error("Personaje no encontrado");
        
        const data = await res.json();
        
        // Actualizamos el número de página en el HTML
        document.querySelector('#pageInfo').innerText = `Página ${page}`;
        
        renderGrid(data.results);
    } catch (error) {
        grid.innerHTML = `<p>No se encontraron resultados para "${name}"</p>`;
    } finally {
        loader.style.display = 'none';
    }
}

function renderGrid (characters) {
    grid.innerHTML = characters.map(char => `
        <div class="card">
            <img src="${char.image}" alt="${char.name}">
            <h3>${char.name}</h3>
            <p>${char.status} - ${char.species}</p>
        </div>
    `).join('');
}


// 1. Lógica del buscador
searchBtn.addEventListener('click', () => {
    currentPage = 1; // Al buscar, siempre volvemos a la página 1
    fetchCharacters(currentPage, searchInput.value);
});

// 2. Lógica de navegación - SIGUIENTE
document.querySelector('#nextBtn').addEventListener('click', () => {
    currentPage++;
    fetchCharacters(currentPage, searchInput.value); // Mantenemos el nombre de búsqueda
});

// 3. Lógica de navegación - ANTERIOR
document.querySelector('#prevBtn').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        fetchCharacters(currentPage, searchInput.value);
    }
});

// Inicialización
fetchCharacters();