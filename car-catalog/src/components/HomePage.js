import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CarCard from './CarCard';

const HomePage = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('/data/db.json').then((response) => {
      setCars(response.data.cars);
      setFilteredCars(response.data.cars);
    });
  }, []);

  useEffect(() => {
    // Filter cars based on the search term when the searchTerm state changes
    const filteredCars = cars.filter(
      (car) =>
        car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.model.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCars(filteredCars);
  }, [searchTerm, cars]);

  return (
    <div>
      <div className="car-search">
        <input
          type="text"
          placeholder="Search by Brand or Model"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="car-catalog">
        {filteredCars.map((car) => (
          <CarCard key={car.model} car={car} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
