
import React, { useState } from 'react';
import './App.css';

function App() {
  const [showBreath, setShowBreath] = useState(false);

  return (
    <div className="app-container">
      <div className="zen-box">
        <h1>FocusZen</h1>
        <h2>Modo Zen</h2>
        <p>Haz una pausa. Respira durante 30 segundos.</p>
        <button onClick={() => setShowBreath(true)}>Iniciar Respiración</button>
        {showBreath && (
          <div className="breath-circle"></div>
        )}
      </div>

      <div className="zen-box">
        <h2>Frase del día</h2>
        <p className="quote">"A veces crecer en silencio es el mejor ruido que puedes hacer."</p>
      </div>

      <div className="zen-box">
        <h2>Tu estado hoy</h2>
        <div className="mood-buttons">
          <button>😊</button>
          <button>😐</button>
          <button>😞</button>
        </div>
      </div>
    </div>
  );
}

export default App;
