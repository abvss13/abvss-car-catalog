import React, { useState, useEffect } from 'react';
import CarCatalog from './components/CarCatalog';
import CarDetail from './components/CarDetail';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [cars, setCars] = useState([]);

  const handleCarSelect = (car) => {
    setSelectedCar(car);
  };

  useEffect(() => {
    // Fetch data from the API using fetch
    fetch('https://api.npoint.io/6b49fadc38eab9e79911')
      .then((response) => response.json())
      .then((data) => setCars(data.cars))
      .catch((error) => {
        console.error('Error fetching data from the API:', error);
      });
  }, []);

  return (
    <div className="app">
      <Navbar />

      {selectedCar ? (
        <CarDetail car={selectedCar} onBack={() => setSelectedCar(null)} />
      ) : (
        <CarCatalog cars={cars} onCarSelect={handleCarSelect} />
      )}

      <Footer />
    </div>
  );
};

export default App;
