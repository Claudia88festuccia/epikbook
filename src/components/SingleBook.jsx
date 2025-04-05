// Crea un componente CommentArea e incorporalo nel componente SingleBook.
//  Quando un utente clicca su un SingleBook, 
//  il componente CommentArea deve venire renderizzato (suggerimento
//   : puoi usare l'operatore && e la proprietà "selected").


import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function SingleBook({ book, selected, setSelected }) {
  const navigate = useNavigate();

  const handleClick = () => {
    setSelected(book.asin);  // Imposta l'ASIN come selected
    navigate(`/book/${book.asin}`);  // Naviga alla pagina dei dettagli
  };

  const handleBorder = () => {
    setSelected(book.asin);
  };

  return (
    <Card
    data-testid="card-book"
      style={{
        width: '18rem',
        border: selected === book.asin ? '3px solid red' : 'none',
        cursor: 'pointer',
      }}
      

      onClick={handleBorder}
    >
      <Card.Img variant="top" src={book.img} alt={book.title} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{book.price} € - {book.category}</Card.Text>
        <button className="btn btn-primary" onClick={handleClick}>Vedi Dettagli</button>
      </Card.Body>
    </Card>
  );
}

export default SingleBook;





