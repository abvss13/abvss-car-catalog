import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CarCard from './CarCard';
import CarSearch from './CarSearch';

const HomePage = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    axios.get('/data/db.json').then((response) => {
      setCars(response.data.cars);
      setFilteredCars(response.data.cars);
    });
  }, []);

  return (
    <div>
      <CarSearch cars={cars} setFilteredCars={setFilteredCars} />
      <div className="car-catalog">
        {filteredCars.map((car) => (
          <CarCard key={car.model} car={car} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
