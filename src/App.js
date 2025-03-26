
import React, { useState, useEffect } from 'react';
import './App.css';
import AllTheBooks from './components/AllTheBooks';
import FooterContainer from './components/MyFooter';
import NavContainer from './components/MyNav';
import BasicAlert from './components/Welcom';
import { FilterContext, ThemeContext } from './components/context';

function App() {
  const [selectedGenre, setSelectedGenre] = useState('fantasy');
  const [searchTerm, setSearchTerm] = useState('');
  const [theme, setTheme] = useState('light');

  // Funzione per alternare il tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <FilterContext.Provider value={{ selectedGenre, setSelectedGenre, searchTerm, setSearchTerm }}>
        <div className={theme}>
          <NavContainer />
          <BasicAlert />
          <AllTheBooks />
          <FooterContainer />
        </div>
      </FilterContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;

