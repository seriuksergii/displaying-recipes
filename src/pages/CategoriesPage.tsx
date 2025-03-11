import { useEffect, useState } from 'react';
import { get_categories } from '../api/api';
import Loader from '../components/Loader/Loader';

const CategoriesPage = () => {
  const [categories, setCategories] = useState<
    {
      idCategory: string;
      strCategory: string;
      strCategoryThumb: string;
      strCategoryDescription: string;
    }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = async () => {
    try {
      const data = await get_categories();
      console.log('Fetched Categories:', data);
      if (Array.isArray(data)) {
        setCategories(data);
      } else {
        setCategories([]);
      }
    } catch (err) {
      console.error('Failed to fetch categories:', err);
      setError('Failed to fetch categories');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Категорії</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.idCategory}>
            <h3>{category.strCategory}</h3>
            <img
              src={category.strCategoryThumb}
              alt={category.strCategory}
              width="100"
            />
            <p>{category.strCategoryDescription}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesPage;
