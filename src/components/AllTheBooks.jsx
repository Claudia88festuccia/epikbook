

import React, { useState, useEffect, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';
import BasicAlert from './Welcom';
import LatestRelease from './LatestRelease';
import SingleBook from './SingleBook';
import { FilterContext } from './context';

function AllTheBooks() {
  const { selectedGenre, setSelectedGenre, searchTerm, selected, setSelected } = useContext(FilterContext);
  const [booksData, setBooksData] = useState([]);

  useEffect(() => {
    import(`./data/${selectedGenre}.json`)
    
      .then((data) => setBooksData(data.default))
      .catch((error) => console.error('Error loading book data:', error));
  }, [selectedGenre]);
  // console.log(booksData);

  const filteredBooks = booksData.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="mt-4">
      {/* Alert e LatestRelease vengono mostrati nella pagina della lista */}
      <BasicAlert />
      <LatestRelease />

      <Dropdown className="mb-3">
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Seleziona Genere
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {['fantasy', 'horror', 'romance', 'history', 'scifi'].map((genre) => (
            <Dropdown.Item key={genre} onClick={() => setSelectedGenre(genre)}>
              {genre.charAt(0).toUpperCase() + genre.slice(1)}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <Row xs={2} md={4} lg={6}>
        {filteredBooks.map((book) => (
        <SingleBook key={book.asin} book={book} selected={selected} setSelected={setSelected} />
       
        ))}
        
      </Row>
    </Container>
  );
}

export default AllTheBooks;
