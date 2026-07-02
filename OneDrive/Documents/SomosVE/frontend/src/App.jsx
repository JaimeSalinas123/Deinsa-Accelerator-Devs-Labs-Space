import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex flex-col text-brand-dark">
      
      {/* Barra de Navegación Superior */}
      <header className="bg-brand-dark text-white p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight">SomosVE</h1>
            <span className="bg-brand-red text-xs px-2 py-1 rounded font-semibold tracking-wider">
              EMERGENCIA
            </span>
          </div>
          <nav>
            <button className="bg-brand-blue px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition">
              Acceso Admin
            </button>
          </nav>
        </div>
      </header>

      {/* Contenedor Principal */}
      <main className="flex-grow max-w-7xl mx-auto w-full p-4 sm:p-6 lg:p-8">
        
        {/* Tarjeta de bienvenida de prueba */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h2 className="text-xl font-semibold mb-2">Panel de Control Activo</h2>
          <p className="text-gray-600">
            La fuente "Inter" ya está funcionando. Aquí es donde maquetaremos los mapas, 
            las tarjetas de escombros y los datos de logística en los próximos pasos.
          </p>
        </div>

      </main>
    </div>
  );
}

export default App;