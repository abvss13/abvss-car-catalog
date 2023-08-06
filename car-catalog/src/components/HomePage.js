import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CarCard from './CarCard';
import CarSearch from './CarSearch';
import CarSort from './CarSort';

const HomePage = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    axios.get('https://api.npoint.io/6b49fadc38eab9e79911').then((response) => {
      setCars(response.data.cars);
      setFilteredCars(response.data.cars);
    });
  }, []);

  const handleSort = (criteria) => {
    let sortedCars = [...filteredCars];
    switch (criteria) {
      case 'priceAsc':
        sortedCars.sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        sortedCars.sort((a, b) => b.price - a.price);
        break;
      case 'brand':
        sortedCars.sort((a, b) => a.brand.localeCompare(b.brand));
        break;
      case 'model':
        sortedCars.sort((a, b) => a.model.localeCompare(b.model));
        break;
      default:
        // Do nothing if "None" option is selected
        break;
    }
    setFilteredCars(sortedCars);
  };

  return (
    <div>
      <CarSearch cars={cars} setFilteredCars={setFilteredCars} />
      <CarSort onSort={handleSort} />
      <div className="car-catalog">
        {filteredCars.map((car) => (
          <CarCard key={car.model} car={car} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
