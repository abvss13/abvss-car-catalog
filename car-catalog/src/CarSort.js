import React from 'react';

const CarSort = ({ onSort }) => {
  const handleSortChange = (e) => {
    onSort(e.target.value);
  };

  return (
    <div className="car-sort">
      <label htmlFor="sort">Sort By:</label>
      <select id="sort" onChange={handleSortChange}>
        <option value="none">None</option>
        <option value="priceAsc">Price (Low to High)</option>
        <option value="priceDesc">Price (High to Low)</option>
        <option value="brand">Brand</option>
        <option value="model">Model</option>
      </select>
    </div>
  );
};

export default CarSort;
