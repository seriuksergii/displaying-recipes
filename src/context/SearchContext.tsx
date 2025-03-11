import { createContext, useContext, useState, ReactNode } from 'react';

interface SearchResult {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
}

type SearchContextType = {
  searchResults: SearchResult[];
  setSearchResults: (results: SearchResult[]) => void;
};

const SearchContext = createContext<SearchContextType>({
  searchResults: [],
  setSearchResults: () => {},
});

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults }}>
      {children}
    </SearchContext.Provider>
  );
};
