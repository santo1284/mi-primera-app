import { useState } from 'react'

import logosena from './assets/sena.jpg'
import Saludo from './components/saludo'; // Importa el componente
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<div>
    {/* Usa el componente como una etiqueta HTML */}
    <Saludo nombre="Santiago" />
  </div>
      <div>
      <img src={logosena} alt="logo sena" />
      </div>
      <h1>mi primera app con vite y react</h1>
      <div className="card">
        <h3>cuenta en: {count}</h3>
        <button onClick={() => setCount((count) => count + 1)}>
          incrementar
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          decrementar
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
