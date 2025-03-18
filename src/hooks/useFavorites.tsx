import { useState, useEffect } from 'react';

const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

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

  return { favorites, updateFavorites };
};

export default useFavorites;