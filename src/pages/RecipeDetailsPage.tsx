import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

import Loader from '../components/Loader/Loader';
import Layout from '../components/Layout/Layout';
import { IoMdClose } from 'react-icons/io';

interface Recipe {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube?: string;
  [key: string]: string | undefined;
}

const RecipeDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get<{ meals: Recipe[] }>(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        if (response.data.meals) {
          setRecipe(response.data.meals[0]);
        } else {
          setRecipe(null);
        }
      } catch (error) {
        console.error('Failed to fetch recipe details:', error);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  const handleClose = () => {
    navigate(-1);
  };

  if (!recipe) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        <div className="text-white text-2xl font-bold">
          <Loader />
        </div>
      </div>
    );
  }

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== '') {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-r from-purple-50 to-pink-50 py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden relative">
            <IoMdClose
              onClick={handleClose}
              className="absolute right-6 top-6 cursor-pointer h-7 w-7"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              <div className="relative">
                <img
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
                <div className="absolute bottom-4 left-4 bg-white bg-opacity-75 px-4 py-2 rounded-full text-sm font-semibold">
                  🍴 {recipe.strCategory}
                </div>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  {recipe.strMeal}
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  <span className="font-medium">📍 Area:</span> {recipe.strArea}
                </p>

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    🛒 Ingredients:
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {ingredients.map((ingredient, index) => (
                      <li
                        key={index}
                        className="bg-purple-50 text-purple-800 px-4 py-2 rounded-full text-sm font-medium"
                      >
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    📝 Instructions:
                  </h3>
                  <p className="text-gray-700 whitespace-pre-line">
                    {recipe.strInstructions}
                  </p>
                </div>

                {recipe.strYoutube && (
                  <div className="mt-6">
                    <a
                      href={recipe.strYoutube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                    >
                      <span className="mr-2">▶️</span>
                      Watch videos on YouTube
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RecipeDetailsPage;
