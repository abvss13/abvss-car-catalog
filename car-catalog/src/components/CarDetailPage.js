import React from 'react';
import CarDetail from './CarDetail';

const CarDetailPage = ({ cars, model }) => {
  const car = cars.find((car) => car.model === model);

  return (
    <div>
      {car ? (
        <CarDetail car={car} />
      ) : (
        <p>Car with model "{model}" not found.</p>
      )}
    </div>
  );
};

export default CarDetailPage;
