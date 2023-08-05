import React from 'react';

const CarDetail = ({ car, onBack }) => {
  return (
    <div className="car-detail">
      <button onClick={onBack} className="back-button">
        Back to Catalog
      </button>
      <img src={car.img_url} alt={car.model} className="car-image" />
      <h2 className="car-brand">{car.brand}</h2>
      <h3 className="car-model">{car.model}</h3>
      <p className="car-info">Price: {car.price}</p>
      <p className="car-info">Engine Type: {car.engine_type}</p>
      <p className="car-info">Acceleration: {car.acceleration}</p>
      <p className="car-info">Release Date: {car.release_date}</p>
      <p className="car-info">Maximum Speed: {car.maximum_speed}</p>
    </div>
  );
};

export default CarDetail;
