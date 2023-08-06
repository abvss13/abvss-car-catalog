import React, { useState } from 'react';

const CarCard = ({ car, onSelect }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [isCarOpen, setIsCarOpen] = useState(false);

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

  const handleOpenCar = (event) => {
    event.stopPropagation();
    setIsCarOpen(true);
  };

  const handleCloseCar = (event) => {
    event.stopPropagation();
    setIsCarOpen(false);
  };

  const renderCarDetails = () => {
    if (isCarOpen) {
      return (
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
            <button className="close-button" onClick={handleCloseCar}>
              Close
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="car-details">
          <button className="open-button" onClick={handleOpenCar}>
            Open
          </button>
        </div>
      );
    }
  };

  return (
    <div className="car-card" onClick={onSelect}>
      <img src={car.img_url} alt={car.model} className="car-image" />
      {renderCarDetails()}
      {isCarOpen && (
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
      )}
    </div>
  );
};

export default CarCard;
