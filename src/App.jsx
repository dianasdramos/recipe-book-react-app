import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import About from './pages/About'
import RecipeDetailsPage from './pages/RecipeDetailsPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Sidebar />
    <Footer />
    <About />
    <RecipeDetailsPage />
    </>
  )
}

export default App
