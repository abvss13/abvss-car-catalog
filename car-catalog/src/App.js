import React, { useState, useEffect } from 'react';
import './App.css';
import CarCatalog from './components/CarCatalog';
import CarDetail from './components/CarDetail';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => {
  // State variables
  const [selectedCar, setSelectedCar] = useState(null);
  const [cars, setCars] = useState([]);

  // Event handler for selecting a car
  const handleCarSelect = (car) => {
    setSelectedCar(car);
  };

  // Fetch data from the API using fetch on component mount
  useEffect(() => {
    fetch('https://api.npoint.io/6b49fadc38eab9e79911')
      .then((response) => response.json())
      .then((data) => setCars(data.cars))
      .catch((error) => {
        console.error('Error fetching data from the API:', error);
      });
  }, []);

  return (
    <div className="app">
      {/* Navbar component */}
      <Navbar />

      {/* Render CarDetail or CarCatalog based on selectedCar state */}
      {selectedCar ? (
        <CarDetail car={selectedCar} onBack={() => setSelectedCar(null)} />
      ) : (
        <CarCatalog cars={cars} onCarSelect={handleCarSelect} />
      )}

      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default App;
