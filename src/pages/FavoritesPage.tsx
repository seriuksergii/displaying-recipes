import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import axios from 'axios';

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  [key: `strIngredient${number}`]: string;
  [key: `strMeasure${number}`]: string;
}

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<Meal[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFavorites = async () => {
      const favoriteIds = JSON.parse(localStorage.getItem('favorites') || '[]');
      const favoriteMeals = await Promise.all(
        favoriteIds.map(async (id: string) => {
          const response = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
          );
          return response.data.meals[0];
        })
      );
      setFavorites(favoriteMeals);
    };

    fetchFavorites();
  }, []);

  const removeFromFavorites = (id: string) => {
    const updatedFavorites = favorites.filter((meal) => meal.idMeal !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem(
      'favorites',
      JSON.stringify(updatedFavorites.map((meal) => meal.idMeal))
    );

    if (updatedFavorites.length === 0) {
      navigate(-1);
    }
  };

  const getAllIngredients = () => {
    const ingredients: string[] = [];
    favorites.forEach((meal) => {
      for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ingredient && ingredient.trim() !== '') {
          ingredients.push(`${ingredient} - ${measure}`);
        }
      }
    });
    return ingredients;
  };

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-pink-50 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden relative p-8">
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 bg-gray-300 hover:bg-gray-200 text-gray-600 rounded-full p-2 transition-colors cursor-pointer flex items-center justify-center"
          >
            <FaTimes className="h-6 w-6" />
          </button>

          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Your favorite recipes
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favorites.map((meal) => (
              <div
                key={meal.idMeal}
                className="bg-white rounded-2xl shadow-lg overflow-hidden relative hover:shadow-xl transition-shadow"
              >
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-full h-48 object-cover"
                />
                <button
                  onClick={() => removeFromFavorites(meal.idMeal)}
                  className="absolute top-2 right-2 bg-white bg-opacity-75 rounded-full p-1 hover:bg-opacity-100 transition-opacity"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {meal.strMeal}
                  </h3>
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

          <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              All ingredients
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {getAllIngredients().map((ingredient, index) => (
                <li
                  key={index}
                  className="bg-purple-50 text-[#d45e15] px-4 py-2 rounded-full text-sm font-medium"
                >
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;
