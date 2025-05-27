
import React, { useState } from 'react';
import './App.css';

function App() {
  const [showBreathCircle, setShowBreathCircle] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2017/08/06/19/44/mountains-2590765_1280.jpg)' }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 text-center">
        <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-2xl shadow-xl p-6 w-full max-w-sm">
          <h1 className="text-4xl font-bold mb-4 text-green-800">FocusZen</h1>
          <h2 className="text-xl font-semibold mb-2">Modo Zen</h2>
          <p className="text-sm text-gray-700 mb-4">Haz una pausa. Respira durante 30 segundos.</p>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-xl w-full"
            onClick={() => setShowBreathCircle(true)}
          >
            Iniciar Respiración
          </button>
          {showBreathCircle && (
            <div className="mt-6 flex items-center justify-center">
              <div className="w-40 h-40 rounded-full bg-green-300 animate-breath" />
            </div>
          )}
        </div>
        <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-2xl shadow-md p-4 mt-6 w-full max-w-sm">
          <h2 className="text-lg font-semibold mb-2 text-gray-800">Frase del día</h2>
          <p className="italic text-gray-700">"A veces crecer en silencio es el mejor ruido que puedes hacer."</p>
        </div>
        <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-2xl shadow-md p-4 mt-6 w-full max-w-sm">
          <h2 className="text-lg font-semibold mb-2 text-gray-800">Tu estado hoy</h2>
          <div className="flex gap-2 justify-center">
            <button className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-full">😊</button>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-full">😐</button>
            <button className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-full">😞</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
