import React from 'react';
import CarCard from './CarCard';

const CarCatalog = ({ cars, onCarSelect, onShuffleCars }) => {
  return (
    <div className="car-catalog">
      <h1 className="catalog-title">ABVSS Car Catalog</h1>
      <h2>These are the most famous cars belonging to Abvss car showroom.</h2>
      {/* Add the Shuffle Cars button */}
      <button className="shuffle-button" onClick={onShuffleCars}>
        Shuffle Cars
      </button>
      <div className="car-grid">
        {cars.map((car) => (
          <CarCard key={car.model} car={car} onSelect={() => onCarSelect(car)} />
        ))}
      </div>
    </div>
  );
};

export default CarCatalog;
