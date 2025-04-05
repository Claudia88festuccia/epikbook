// AddComment conterrà un form per raccogliere il testo della recensione e la valutazione da 1 a 5;
//  una volta raccolti i dati, tramite
//  un pulsante (onClick!) verrà effettuata una chiamata POST per inviare la recensione alle API.



import React, { useState } from 'react';


function AddComment({ asin, refreshComments }) {
  const [comment, setComment] = useState('');
  const [rate, setRate] = useState(1);
  const [loading, setLoading] = useState(false); // Stato per il caricamento
  const [error, setError] = useState(null);
  
  
  const submitComment =async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
        method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2YxNjQxYjI2YTJlMjAwMTUwZmQxNzEiLCJpYXQiOjE3NDM4NzMzMjcsImV4cCI6MTc0NTA4MjkyN30.f9S80rT-sxUVV2LxoihkfSUeS4GsUCpwWIT-yNdv104"
      },
      body: JSON.stringify({ comment, rate, elementId: asin })
    })

      if (!response.ok) {
        throw new Error('Failed to add comment');
      }
setComment(''); 
setRate(1); 
refreshComments();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
}
  return (
    <div>
      <h5>Aggiungi un commento</h5>
      <textarea value={comment} 
      onChange={(e) => setComment(e.target.value)}
       placeholder="Scrivi un commento..." />
      <select value={rate} onChange={(e) => setRate(e.target.value)}>
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num} value={num}>{num}</option>
        ))}
      </select>
      <button onClick={submitComment}>Invia</button>
    </div>
  );
}
export default AddComment; 