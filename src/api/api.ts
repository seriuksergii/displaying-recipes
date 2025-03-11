import axios from 'axios';

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';
const CATEGORY_URL = `${BASE_URL}categories.php`;
const AREAS_URL = `${BASE_URL}api/json/v1/1/list.php?a=list`;
const INGRIDIENTS_URL = `${BASE_URL}api/json/v1/1/list.php?i=list`;

export const get_categories = async () => {
  try {
    const response = await axios.get(CATEGORY_URL, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data.categories;
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    return [];
  }
};

export const get_regions = async () => {
  try {
    const response = await axios.get(AREAS_URL);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch regions:', error);
    return [];
  }
};

export const get_ingredients = async () => {
  try {
    const response = await axios.get(INGRIDIENTS_URL);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch ingredients:', error);
    return [];
  }
};

export const searchMealsByName = async (name: string) => {
  try {
    const response = await axios.get(`${BASE_URL}search.php?s=${name}`);
    return response.data.meals;
  } catch (error) {
    console.error('Failed to fetch meals:', error);
    return [];
  }
};

export const getMealById = async (id: string) => {
  try {
    const response = await axios.get(`${BASE_URL}lookup.php?i=${id}`);
    return response.data.meals[0];
  } catch (error) {
    console.error('Failed to fetch meal details:', error);
    return null;
  }
};

export const filterMealsByCategory = async (category: string) => {
  try {
    const response = await axios.get(`${BASE_URL}filter.php?c=${category}`);
    return response.data.meals;
  } catch (error) {
    console.error('Failed to filter meals by category:', error);
    return [];
  }
};
