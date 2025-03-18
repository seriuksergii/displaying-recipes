import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
}

const useRecipes = () => {
  const { category } = useParams<{ category: string }>();
  const location = useLocation();
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  const searchParams = new URLSearchParams(location.search);
  const searchQueryParam = searchParams.get('q');

  useEffect(() => {
    const fetchMeals = async () => {
      setLoading(true);
      setError(null);
      try {
        let url;
        if (searchQueryParam) {
          url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQueryParam}`;
        } else if (category) {
          url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
        } else {
          url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
        }
        const response = await axios.get(url);
        setMeals(response.data.meals || []);
      } catch (error) {
        console.error('Failed to fetch meals:', error);
        setError('Failed to fetch meals. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, [category, searchQueryParam]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = meals.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return {
    meals,
    currentItems,
    loading,
    error,
    currentPage,
    totalPages: Math.ceil(meals.length / itemsPerPage),
    handlePageChange,
    category,
  };
};

export default useRecipes;
