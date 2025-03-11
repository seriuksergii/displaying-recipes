import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import './HomeCatSlider.css';
import { useEffect, useState } from 'react';
import { get_categories } from '../../api/api';
import { useNavigate } from 'react-router-dom';

interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

const HomeCatSlider = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await get_categories();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (category: string) => {
    navigate(`/category/${category}`);
  };

  return (
    <div className="homeCatSlider py-8">
      <div className="container">
        <Swiper
          slidesPerView={8}
          spaceBetween={10}
          navigation={false}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={2000}
          className="mySwiper"
        >
          {categories.map((category) => (
            <SwiperSlide key={category.idCategory}>
              <div
                className="item rounded-md border-3 border-[rgba(0,0,0,.1)] cursor-pointer"
                onClick={() => handleCategoryClick(category.strCategory)}
              >
                <img
                  src={category.strCategoryThumb}
                  alt={category.strCategory}
                  className="w-full h-auto object-cover"
                />
                <p className="text-center mt-2 font-semibold">
                  {category.strCategory}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCatSlider;
