// Crea un componente CommentArea e incorporalo nel componente SingleBook.
//  Quando un utente clicca su un SingleBook, 
//  il componente CommentArea deve venire renderizzato (suggerimento
//   : puoi usare l'operatore && e la proprietà "selected").


import Card from 'react-bootstrap/Card';
import React from 'react';


function SingleBook({ book, selected, setSelected }) {
  return (
    <Card
      style={{
        width: '18rem',
        border: selected === book.asin ? '3px solid red' : 'none',
        cursor: 'pointer',
      }}
      onClick={() => setSelected(book.asin)} //  Imposta l'ASIN come selected
    >
      <Card.Img variant="top" src={book.img} alt={book.title} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{book.price} € - {book.category}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SingleBook;
