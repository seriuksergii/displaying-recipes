import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useSearch } from '../../context/SearchContext';
import Loader from '../Loader/Loader';
import Layout from '../Layout/Layout';
import { IoMdClose } from 'react-icons/io';

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
}

interface AllRecipesProps {
  isStandalone?: boolean;
}

const AllRecipes = ({ isStandalone = false }: AllRecipesProps) => {
  const { category } = useParams<{ category: string }>();
  const [meals, setMeals] = useState<Meal[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { searchResults } = useSearch();

  useEffect(() => {
    const fetchMealsByCategory = async () => {
      setLoading(true);
      setError(null);
      try {
        const url = category
          ? `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
          : 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
        const response = await axios.get(url);
        setMeals(response.data.meals || []);
      } catch (error) {
        console.error('Failed to fetch meals:', error);
        setError('Failed to fetch meals. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMealsByCategory();
  }, [category]);

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem('favorites') || '[]'
    );
    setFavorites(storedFavorites);
  }, []);

  const updateFavorites = (idMeal: string) => {
    const updatedFavorites = favorites.includes(idMeal)
      ? favorites.filter((mealId) => mealId !== idMeal)
      : [...favorites, idMeal];

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    window.dispatchEvent(new Event('storage'));
  };

  const handleRecipeClick = (id: string) => navigate(`/recipe/${id}`);
  const handleClose = () => navigate('/');

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems =
    searchResults.length > 0
      ? searchResults
      : meals.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => setCurrentPage(value);

  const content = (
    <div className="allRecipesPage py-8 relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6 relative">
          <h2 className="text-2xl font-bold">
            {category
              ? `Recipes in ${category}`
              : 'Best recipes for your family'}
          </h2>
          {category && (
            <IoMdClose
              onClick={handleClose}
              className="absolute right-1 top-3 cursor-pointer h-7 w-7"
            />
          )}
        </div>

        {loading && <Loader />}
        {error && <p className="text-red-500">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentItems.map((meal) => (
            <div
              key={meal.idMeal}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow relative"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-48 object-cover"
                onClick={() => handleRecipeClick(meal.idMeal)}
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  updateFavorites(meal.idMeal);
                }}
                className="absolute top-2 right-2 bg-white bg-opacity-75 rounded-full p-2 hover:bg-opacity-100 transition-opacity cursor-pointer border-2 border-gray-300"
              >
                {favorites.includes(meal.idMeal) ? (
                  <FaHeart className="text-red-500" />
                ) : (
                  <FaRegHeart className="text-gray-600" />
                )}
              </button>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{meal.strMeal}</h3>
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-medium">Category:</span>{' '}
                  {meal.strCategory}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Area:</span> {meal.strArea}
                </p>
              </div>
            </div>
          ))}
        </div>

        {searchResults.length === 0 && (
          <div className="flex justify-center mt-8">
            <Stack spacing={2}>
              <Pagination
                count={Math.ceil(meals.length / itemsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                shape="rounded"
                variant="outlined"
                showFirstButton
                showLastButton
              />
            </Stack>
          </div>
        )}
      </div>
    </div>
  );

  return isStandalone ? <Layout>{content}</Layout> : content;
};

export default AllRecipes;
