
import React, { useState} from 'react';
import './App.css';
// import LatestRelease from './components/LatestRelease';
import FooterContainer from './components/MyFooter';
import NavContainer from './components/MyNav';
// import BasicAlert from './components/Welcom';
import { FilterContext, ThemeContext } from './components/context';
import AllTheBooks from './components/AllTheBooks';
import BookDetails from './components/BookDetails';  
import NotFound from './components/NotFound';  
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  const [selectedGenre, setSelectedGenre] = useState('fantasy');
  const [searchTerm, setSearchTerm] = useState('');
  const [theme, setTheme] = useState('light');
  const [selected, setSelected] = useState(null);

  // Funzione per alternare il tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
   
  <BrowserRouter>
  <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <FilterContext.Provider value={{ selectedGenre, setSelectedGenre, searchTerm, setSearchTerm,selected,
            setSelected, }}>
      <div className={theme}>
        <NavContainer />
        {/* <BasicAlert />
        <LatestRelease />  Gestisce sia i libri che la selezione dei commenti */}
        
      </div>
      <div className="main-content">
    <Routes>
      <Route path="/" element={<AllTheBooks />} />
      <Route path="/book/:asin" element={<BookDetails />} /> {/* Nuova rotta per BookDetails */}
        <Route path="*" element={<NotFound />} /> {/* Rotta per 404 */}
    </Routes>
    </div>
    <FooterContainer />
    </FilterContext.Provider>
    </ThemeContext.Provider>
  </BrowserRouter>
    </>
);
}

export default App;

