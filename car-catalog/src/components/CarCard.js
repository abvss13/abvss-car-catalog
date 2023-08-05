import React from 'react';

const CarCard = ({ car, onSelect }) => {
  return (
    <div className="car-card" onClick={onSelect}>
      <img src={car.img_url} alt={car.model} className="car-image" />
      <div className="car-details">
        <h2>{car.brand}</h2>
        <h3>{car.model}</h3>
        <p>Price: {car.price}</p>
      </div>
    </div>
  );
};

export default CarCard;
