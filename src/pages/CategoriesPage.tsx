import { useEffect, useState } from 'react';
import { get_categories } from '../api/api';
import Loader from '../components/Loader/Loader';
import Layout from '../components/Layout/Layout';

interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

const CategoriesPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = async () => {
    try {
      const data = await get_categories();
      if (Array.isArray(data)) {
        setCategories(data);
      } else {
        setCategories([]);
      }
    } catch {
      setError('Failed to fetch categories');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  return (
    <Layout>
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
    </Layout>
  );
};

export default CategoriesPage;
