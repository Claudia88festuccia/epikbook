// CommentsList riceverà la lista di recensioni da CommentArea con una prop,
//  e dovrà renderizzare la lista utilizzando un componente SingleComment.



import React from 'react';

function SingleComment({ comment, refreshComments }) {
  const deleteComment = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${comment._id}`, {
      method: 'DELETE',
      headers: { "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkYmNmZDM4MzRiZjAwMTUwMDBhNWYiLCJpYXQiOjE3NDI1ODUwODUsImV4cCI6MTc0Mzc5NDY4NX0.hvzD-aoHTdHKjeP6dUDWO-eAy5Yp-2zt9SfMP5BqSRI" }
    }).then(() => refreshComments());
  };

  return (
    <div>
      <p>{comment.comment} - <strong>{comment.rate}/5</strong></p>
      <button onClick={deleteComment}>Delete</button>
    </div>
  );
}

export default SingleComment;