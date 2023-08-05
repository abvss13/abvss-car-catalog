import React from 'react';
import CarCard from './CarCard';

const CarCatalog = ({ cars, onCarSelect }) => {
  return (
    <div className="car-catalog">
      <h1 className="catalog-title">ABVSS Car Catalog</h1>
      <h2>ABVSS Car Catalog has some of the most cars in its showroom</h2>
      <div className="car-grid">
        {cars.map((car) => (
          <CarCard key={car.model} car={car} onSelect={() => onCarSelect(car)} />
        ))}
      </div>
    </div>
  );
};

export default CarCatalog;
