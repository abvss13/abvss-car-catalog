import React, { useState } from 'react';

const CarCard = ({ car, onSelect }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = (event) => {
    event.stopPropagation(); // Prevent the click event from bubbling up
    setLikes((prevLikes) => prevLikes + 1);
  };

  const handleDislike = (event) => {
    event.stopPropagation(); // Prevent the click event from bubbling up
    setDislikes((prevDislikes) => prevDislikes + 1);
  };

  return (
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
        </div>
      </div>
    </div>
  );
};

export default CarCard;
