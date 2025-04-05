// src/components/BookDetails.js
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FilterContext } from './context'; 
import { Container, Button, Card } from 'react-bootstrap';
import CommentArea from './CommentArea';
function BookDetails() {
  const { asin } = useParams(); // Ottieni l'ASIN dalla URL
  const { selectedGenre} = useContext(FilterContext); // Recupera selectedGenre dal contesto
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);  // Stato di caricamento
  const [error, setError] = useState(null);      // Stato per errori

  useEffect(() => {
    setLoading(true);
    setError(null); // Resetta errori quando inizia il caricamento

    if (selectedGenre) {
      import(`./data/${selectedGenre}.json`)  
        .then((data) => {
          const bookData = data.default.find((item) => item.asin === asin); // Trova il libro tramite ASIN
          if (bookData) {
            setBook(bookData);  // Imposta i dati del libro
          } else {
            setError('Libro non trovato'); 
          }
        })
        .catch((err) => {
          setError('Errore nel caricare i dati del libro'); 
          console.error('Errore nel caricare i dati del libro:', err);
        })
        .finally(() => {
          setLoading(false);  
        });
    }
  }, [asin, selectedGenre]);  

  if (loading) {
    return <div>Caricamento...</div>;
  }

  if (error) {
    return <div>{error}</div>; 
  }

  if (!book) {
    return <div>Libro non trovato</div>;  
  }

  return (
    <Container className="mt-4">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={book.img} alt={book.title} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.description}</Card.Text>
          <Card.Text><strong>Prezzo:</strong> {book.price} €</Card.Text>
          <Card.Text><strong>Categoria:</strong> {book.category}</Card.Text>
          <Button variant="primary" href="/">Torna alla lista libri</Button>
        </Card.Body>
        <CommentArea asin={asin} />
      </Card>
    </Container>
  );
}

export default BookDetails;



