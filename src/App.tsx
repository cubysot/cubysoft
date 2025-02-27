import React from 'react';
import { FaGamepad, FaUsers, FaDiscord, FaTwitter, FaYoutube, FaInstagram, FaChevronDown, FaServer, FaShoppingCart } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-900 via-emerald-800 to-emerald-950 text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1607513746994-51f730a44832?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
            filter: 'brightness(0.4)'
          }}
        />
        
        {/* Floating blocks animation */}
        <div className="absolute inset-0 z-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-16 h-16 bg-white rounded-sm animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
                opacity: 0.1 + Math.random() * 0.2,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            />
          ))}
        </div>
        
        {/* Hero content */}
        <div className="container mx-auto px-4 z-10 text-center">
          <div className="flex items-center justify-center mb-6">
            <FaServer className="w-12 h-12 mr-3 text-emerald-400" />
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="text-emerald-400">Cuby</span>Soft
            </h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">
            Un mundo de aventuras te espera. Únete a nuestra comunidad de Minecraft y crea recuerdos inolvidables.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center">
              <FaGamepad className="mr-2 h-5 w-5" />
              Unirse al Servidor
            </button>
            <a href="https://dc.cubysoft.uk" target="_blank" rel="noopener noreferrer" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center">
              <FaDiscord className="mr-2 h-5 w-5" />
              Unirse a Discord
            </a>
            <a href="https://shop.cubysoft.uk" target="_blank" rel="noopener noreferrer" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center">
              <FaShoppingCart className="mr-2 h-5 w-5" />
              Tienda
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <FaChevronDown className="h-8 w-8 text-emerald-400" />
        </div>
      </header>

      {/* Server Info Section */}
      <section className="py-20 bg-emerald-950 bg-opacity-70">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-emerald-400">Nuestro</span> Servidor
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-emerald-900 bg-opacity-50 p-8 rounded-xl transform transition-all hover:scale-105 border border-emerald-700 hover:border-emerald-500">
              <div className="w-16 h-16 bg-emerald-700 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaUsers className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Comunidad Activa</h3>
              <p className="text-gray-300 text-center">
                Únete a cientos de jugadores en una comunidad amigable y colaborativa.
              </p>
            </div>
            
            <div className="bg-emerald-900 bg-opacity-50 p-8 rounded-xl transform transition-all hover:scale-105 border border-emerald-700 hover:border-emerald-500">
              <div className="w-16 h-16 bg-emerald-700 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaGamepad className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Eventos Especiales</h3>
              <p className="text-gray-300 text-center">
                Participa en eventos semanales con premios exclusivos y desafíos únicos.
              </p>
            </div>
            
            <div className="bg-emerald-900 bg-opacity-50 p-8 rounded-xl transform transition-all hover:scale-105 border border-emerald-700 hover:border-emerald-500">
              <div className="w-16 h-16 bg-emerald-700 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaServer className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Mundo Personalizado</h3>
              <p className="text-gray-300 text-center">
                Explora un mundo único con biomas personalizados y estructuras sorprendentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Server Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-20" 
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1627855437693-ddb2a993e7a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")'
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              <span className="text-emerald-400">¿Cómo</span> Unirse?
            </h2>
            
            <div className="bg-emerald-900 bg-opacity-70 p-8 rounded-xl border border-emerald-700 mb-8">
              <h3 className="text-2xl font-bold mb-4">Dirección del Servidor</h3>
              <div className="bg-emerald-950 p-4 rounded-lg flex items-center justify-between mb-4">
                <code className="text-emerald-400 text-lg">mc.cubysoft.uk</code>
                <button 
                  className="bg-emerald-700 hover:bg-emerald-600 text-white px-4 py-2 rounded-md text-sm"
                  onClick={() => {
                    navigator.clipboard.writeText('mc.cubysoft.uk');
                    alert('¡IP copiada al portapapeles!');
                  }}
                >
                  Copiar
                </button>
              </div>
              <p className="text-gray-300">
                Compatible con Minecraft Java Edition 1.19.2
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-emerald-900 bg-opacity-50 p-6 rounded-xl border border-emerald-700">
                <h3 className="text-xl font-bold mb-3">Paso 1</h3>
                <p className="text-gray-300">
                  Abre Minecraft Java Edition y haz clic en "Multijugador"
                </p>
              </div>
              
              <div className="bg-emerald-900 bg-opacity-50 p-6 rounded-xl border border-emerald-700">
                <h3 className="text-xl font-bold mb-3">Paso 2</h3>
                <p className="text-gray-300">
                  Haz clic en "Añadir servidor" e ingresa nuestra dirección
                </p>
              </div>
              
              <div className="bg-emerald-900 bg-opacity-50 p-6 rounded-xl border border-emerald-700">
                <h3 className="text-xl font-bold mb-3">Paso 3</h3>
                <p className="text-gray-300">
                  Guarda el servidor y haz doble clic para conectarte
                </p>
              </div>
              
              <div className="bg-emerald-900 bg-opacity-50 p-6 rounded-xl border border-emerald-700">
                <h3 className="text-xl font-bold mb-3">Paso 4</h3>
                <p className="text-gray-300">
                  ¡Disfruta de la aventura y conoce nuevos amigos!
                </p>
              </div>
            </div>
            
            <a href="https://www.minecraft.net/es-es/download" target="_blank" rel="noopener noreferrer" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 inline-block">
              Descargar Minecraft
            </a>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-emerald-950 bg-opacity-70">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-emerald-400">Nuestra</span> Comunidad
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-emerald-900 bg-opacity-50 p-8 rounded-xl border border-emerald-700 flex flex-col items-center">
              <FaDiscord className="h-16 w-16 text-indigo-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Discord</h3>
              <p className="text-gray-300 text-center mb-6">
                Únete a nuestro servidor de Discord para chatear con otros jugadores, participar en eventos y recibir anuncios importantes.
              </p>
              <a href="https://dc.cubysoft.uk" target="_blank" rel="noopener noreferrer" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 mt-auto">
                Unirse a Discord
              </a>
            </div>
            
            <div className="bg-emerald-900 bg-opacity-50 p-8 rounded-xl border border-emerald-700 flex flex-col items-center">
              <FaShoppingCart className="h-16 w-16 text-amber-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Tienda</h3>
              <p className="text-gray-300 text-center mb-6">
                Visita nuestra tienda para adquirir rangos especiales, cosméticos exclusivos y otras ventajas para mejorar tu experiencia de juego.
              </p>
              <a href="https://shop.cubysoft.uk" target="_blank" rel="noopener noreferrer" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 mt-auto">
                Visitar Tienda
              </a>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-center mb-8">Síguenos en Redes Sociales</h3>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="bg-emerald-900 hover:bg-emerald-800 p-4 rounded-full transition-all transform hover:scale-110">
              <FaTwitter className="h-8 w-8 text-blue-400" />
            </a>
            <a href="#" className="bg-emerald-900 hover:bg-emerald-800 p-4 rounded-full transition-all transform hover:scale-110">
              <FaYoutube className="h-8 w-8 text-red-500" />
            </a>
            <a href="#" className="bg-emerald-900 hover:bg-emerald-800 p-4 rounded-full transition-all transform hover:scale-110">
              <FaInstagram className="h-8 w-8 text-pink-400" />
            </a>
            <a href="https://dc.cubysoft.uk" target="_blank" rel="noopener noreferrer" className="bg-emerald-900 hover:bg-emerald-800 p-4 rounded-full transition-all transform hover:scale-110">
              <FaDiscord className="h-8 w-8 text-indigo-400" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-emerald-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <FaServer className="w-8 h-8 mr-2 text-emerald-400" />
              <span className="text-2xl font-bold">
                <span className="text-emerald-400">Cuby</span>Soft
              </span>
            </div>
            
            <div className="text-gray-400 text-center md:text-right">
              <p>© 2025 CubySoft. Todos los derechos reservados.</p>
              <p className="text-sm mt-1">
                No estamos afiliados con Mojang AB.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;