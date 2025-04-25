import { useState } from 'react';
import logosena from './assets/sena.jpg';
import Saludo from './components/saludo';
//import './App.css'; 


function App() {
  const [count, setCount] = useState(0);
  return (
  
    <body className="font-sans antialiased w-screen bg-zinc-100 text-zinc-300 dark:bg-zinc-900 dark:text-zinc-100 flex flex-col items-center text-center ">
      
      <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 py-5">
        <Saludo nombre="Santiago" />
        </p>
     
     <div className='flex justify-center items-center'>
        <img src={logosena} alt="logo sena" className="max-w-50 h-50 shadow-[0_0_50px_20px_rgba(10,149,10,0.7)]" />
        </div>
      <h1 className="text-3xl leading-none font-semibold py-5">mi primera app con vite y react</h1>
      <div className="bg-zinc-900 dark:bg-zinc-800 rounded-lg shadow-md p-6 text-center">
        <h3 className="text-lg font-medium mb-2">cuenta en: <span className="font-bold">{count}</span></h3>
        <div className="flex gap-2 justify-center">
          <button
            className="rounded-md border border-transparent px-4 py-2 text-sm font-medium bg-zinc-700 hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 transition-colors"
            onClick={() => setCount((count) => count + 1)}
          >
            incrementar
          </button>
          <button
            className="rounded-md border border-transparent px-4 py-2 text-sm font-medium bg-zinc-700 hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 transition-colors"
            onClick={() => setCount((count) => count - 1)}
          >
            decrementar
          </button>
        </div>
        <p className="text-sm mt-4 text-zinc-500 dark:text-zinc-400">
          Edit <code className="font-mono text-zinc-400">src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        Click on the Vite and React logos to learn more
      </p>
    </body>
  );
}

export default App;