import { createContext, useContext, useState } from 'react';

const SearchContext = createContext({
  searchResults: [],
  setSearchResults: (results) => {},
});

export const useSearch = () => useContext(SearchContext);

import { ReactNode } from 'react';

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults }}>
      {children}
    </SearchContext.Provider>
  );
};
