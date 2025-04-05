// CommentsList riceverà la lista di recensioni da CommentArea con una prop,
//  e dovrà renderizzare la lista utilizzando un componente SingleComment.



import React from 'react';

function SingleComment({ comment, refreshComments }) {
  const deleteComment = async() => {
    try {

   const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${comment._id}`, {
      method: 'DELETE',
      headers: { 
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2YxNjQxYjI2YTJlMjAwMTUwZmQxNzEiLCJpYXQiOjE3NDM4NzMzMjcsImV4cCI6MTc0NTA4MjkyN30.f9S80rT-sxUVV2LxoihkfSUeS4GsUCpwWIT-yNdv104"
      }
    })
    if (response.ok) {
      refreshComments(); // Refresh dei commenti dopo l'eliminazione
    } else {
      throw new Error('Failed to delete comment');
    }
  } catch (err) {
    console.error('Error deleting comment:', err);
  }
};

  return (
    <div data-testid="single-comment">
      <p>{comment.comment} - <strong>{comment.rate}/5</strong></p>
      <button onClick={deleteComment}>Delete</button>
    </div>
  );
}

export default SingleComment;