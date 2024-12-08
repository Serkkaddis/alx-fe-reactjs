import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './components/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="text-blue-500">Hello, Tailwind CSS!</h1>
      <div className="min-h-screen bg-gray-100">
      <HomePage />
      </div>
    </>
  )
}

export default App
