import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { MdFavoriteBorder } from 'react-icons/md';
import Tooltip from '@mui/material/Tooltip';

import { FaRocket } from 'react-icons/fa';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    backgroundColor: '#d45e15',
  },
}));

const Header = () => {
  const [favoritesCount, setFavoritesCount] = useState<number>(0);

  useEffect(() => {
    const updateFavoritesCount = () => {
      const favoriteIds = JSON.parse(localStorage.getItem('favorites') || '[]');
      setFavoritesCount(favoriteIds.length);
    };

    updateFavoritesCount();

    window.addEventListener('storage', updateFavoritesCount);

    return () => {
      window.removeEventListener('storage', updateFavoritesCount);
    };
  }, []);

  return (
    <header className="bg-[#fff]">
      <div className="top-strip py-2 border-t-[1px] border-b-[1px] border-gray-300">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[16px] font-[600] text-[#d45e15]">
                Delicious recipes from all over the world for every taste
              </p>
            </div>
            <div className="col2 flex items-center justify-end">
              <ul className="flex items-center gap-4">
                <li className="list-none">
                  <Link
                    to="#"
                    className="text-[14px] font-[500] link"
                  >
                    Help Center
                  </Link>
                </li>
                <li className="list-none"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header py-4 border-b-[1px] border-gray-300 ">
        <div className="container flex items-center justify-between">
          <div className="col1 w-[30%]">
            <Link to={'/'} className="flex items-center justify-between">
              <div className="logo-title ">
                <h1 className="text-[42px] font-[700] text-[#23b3f5]">
                  Cook Like a Pro
                </h1>

                <p className="text-[16px] font-[900] text-[#000] flex items-center gap-2 uppercase">
                  Only the Best Recipes
                  <FaRocket className="text-[#d45e15] text-[20px]" />
                </p>
              </div>
            </Link>
          </div>
          <div className="col2 w-[40%]">
            <Search />
          </div>
          <div className="col3 w-[30%] flex items-center pl-7">
            <div className="flex items-center justify-end gap-3 w-full">
              <li className="list-none">
                <Link
                  to="#"
                  className="link transition text-[16px] font-[500] link"
                >
                  Login
                </Link>{' '}
                | &nbsp;
                <Link
                  to="#"
                  className="link transition text-[16px] font-[500] link"
                >
                  Register
                </Link>
              </li>

              <li className="list-none">
                <Tooltip title="Favourite" arrow>
                  <Link to="/favorites">
                    <IconButton aria-label="cart">
                      <StyledBadge
                        badgeContent={favoritesCount}
                        color="secondary"
                      >
                        <MdFavoriteBorder />
                      </StyledBadge>
                    </IconButton>
                  </Link>
                </Tooltip>
              </li>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
