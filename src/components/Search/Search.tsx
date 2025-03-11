import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { IoSearchSharp } from 'react-icons/io5';
import debounce from 'lodash.debounce';
import { useSearch } from '../../context/SearchContext'; 


const Search = () => {
  const [query, setQuery] = useState<string>('');
  const { setSearchResults } = useSearch();

  const fetchMeals = async (searchQuery: string) => {
    if (!searchQuery) {
      setSearchResults([]);
      return;
    }

    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
    );
    const data = await response.json();
    setSearchResults(data.meals || []);
  };

  const debouncedFetchMeals = debounce(fetchMeals, 500);

  useEffect(() => {
    debouncedFetchMeals(query);
    return () => {
      debouncedFetchMeals.cancel();
    };
  }, [query, debouncedFetchMeals]);

  return (
    <div className="searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-md relative p-2">
      <input
        type="text"
        placeholder="Look for delicious..."
        className="w-full h-[35px] focus:outline-none bg-none p-3 text-[16px]"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button
        sx={{
          position: 'absolute',
          top: '8px',
          right: '5px',
          zIndex: 50,
          width: '40px',
          minWidth: '37px',
          height: '37px',
          borderRadius: '50%',
          color: 'black',
          '&:hover': {
            backgroundColor: 'transparent',
          },
        }}
      >
        <IoSearchSharp className="text-[#787676] text-[22px]" />
      </Button>
    </div>
  );
};

export default Search;