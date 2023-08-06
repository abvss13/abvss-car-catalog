import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CarCard from './CarCard';
import CarSearch from './CarSearch';

const HomePage = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    axios.get('https://api.npoint.io/6b49fadc38eab9e79911').then((response) => {
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
