import React, { useState, useEffect } from 'react';
import './App.css';
import CarCatalog from './components/CarCatalog';
import CarDetail from './components/CarDetail';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import DarkMode from './components/DarkMode';

const App = () => {
  // State variables
  const [selectedCar, setSelectedCar] = useState(null);
  const [cars, setCars] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false); // Define isDarkMode state

  // Event handler for selecting a car
  const handleCarSelect = (car) => {
    setSelectedCar(car);
  };

  // Event handler for toggling dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  };

  // Function to shuffle the cars array
  const handleShuffleCars = () => {
    const shuffledCars = [...cars];
    for (let i = shuffledCars.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCars[i], shuffledCars[j]] = [shuffledCars[j], shuffledCars[i]];
    }
    setSelectedCar(null); // Deselect any selected car
    setSelectedCar(shuffledCars[0]); // Select the first car after shuffling
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
    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Navbar component */}
      <Navbar />
      <DarkMode isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} /> {/* Include the DarkMode component */}
      {/* Add the Shuffle Cars button here */}
      <button className="shuffle-button" onClick={handleShuffleCars}>
        Shuffle Cars
      </button>
      {/* Render CarDetail or CarCatalog based on selectedCar state */}
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
