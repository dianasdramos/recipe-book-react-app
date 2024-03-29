import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import About from './pages/About';
import RecipeDetails from './pages/RecipeDetails';
import Recipes from './pages/Recipes';
import Error from './pages/Error';
import './App.css';

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipeDetails/:id" element={<RecipeDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Sidebar />
      <Footer />
    </main>
  );
}

export default App;

