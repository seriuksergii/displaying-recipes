import AllRecipes from '../components/AllRecipes/AllRecipes';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import HomeCatSlider from '../components/HomeCatSlider/HomeCatSlider';

const HomePage = () => {
  return (
    <div>
      <Header />
      <HomeCatSlider />
      <AllRecipes />
      <Footer />
    </div>
  );
};

export default HomePage;
