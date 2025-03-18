import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AllRecipes from './components/AllRecipes/AllRecipes';
import RecipeDetailsPage from './pages/RecipeDetailsPage';
import FavoritesPage from './pages/FavoritesPage';
import { SearchProvider } from './context/SearchContext';
import './App.css';

const App = () => {
  return (
    <SearchProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/category/:category"
            element={<AllRecipes isStandalone={true} />}
          />
          <Route path="/recipe/:id" element={<RecipeDetailsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Router>
    </SearchProvider>
  );
};

export default App;
