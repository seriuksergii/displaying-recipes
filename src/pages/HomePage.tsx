import Layout from '../components/Layout/Layout';
import HomeCatSlider from '../components/HomeCatSlider/HomeCatSlider';
import AllRecipes from '../components/AllRecipes/AllRecipes';

const HomePage = () => {
  return (
    <Layout>
      <HomeCatSlider />
      <AllRecipes />
    </Layout>
  );
};

export default HomePage;