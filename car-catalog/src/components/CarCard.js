import React, { useState } from 'react';

const CarCard = ({ car, onSelect }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleLike = (event) => {
    event.stopPropagation();
    setLikes((prevLikes) => prevLikes + 1);
  };

  const handleDislike = (event) => {
    event.stopPropagation();
    setDislikes((prevDislikes) => prevDislikes + 1);
  };

  const handleShare = (event) => {
    event.stopPropagation();
    alert('Share button clicked!');
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmitComment = (event) => {
    event.preventDefault();
    if (newComment.trim() !== '') {
      setComments((prevComments) => [...prevComments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div>
      <div className="car-card" onClick={onSelect}>
        <img src={car.img_url} alt={car.model} className="car-image" />
        <div className="car-details">
          <h2>{car.brand}</h2>
          <h3>{car.model}</h3>
          <p>Price: {car.price}</p>
          <div className="buttons-container">
            <button className="like-button" onClick={handleLike}>
              Like ({likes})
            </button>
            <button className="dislike-button" onClick={handleDislike}>
              Dislike ({dislikes})
            </button>
            <button className="share-button" onClick={handleShare}>
              Share
            </button>
          </div>
        </div>
      </div>
      <div className="comment-section">
        <h4>Comments:</h4>
        {comments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
        <form onSubmit={handleSubmitComment}>
          <textarea
            rows="4"
            cols="50"
            value={newComment}
            onChange={handleCommentChange}
            placeholder="Enter your comment..."
            className="comment-input"
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CarCard;
