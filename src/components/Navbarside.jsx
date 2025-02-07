import React, { useEffect } from "react";
import "./css/Navbarside.css";
import { FaCheckSquare, FaRegSquare } from "react-icons/fa";

const Navbarside = ({
  selectedTypes, setSelectedTypes,
  selectedCapacities, setSelectedCapacities,
  maxPrice, setMaxPrice, minPrice, maxPriceLimit
}) => {

 
  const toggleType = (type) => {
    setSelectedTypes((prev) => {
      const updatedTypes = prev.includes(type)
        ? prev.filter((t) => t !== type) 
        : [...prev, type]; 

      return updatedTypes;
    });
  };

  // Toggle Capacity Selection
  const toggleCapacity = (capacity) => {
    setSelectedCapacities((prev) =>
      prev.includes(capacity) ? prev.filter(c => c !== capacity) : [...prev, capacity]
    );
  };

  return (
    <div className="Navbarside">
      {/* TYPE FILTER */}
      <div className="filter-section">
        <h4>TYPE</h4>
        {selectedTypes.map((type, index) => (
          <div key={index} className="filter-item" onClick={() => toggleType(type)}>
            {selectedTypes.includes(type) ? <FaCheckSquare className="checkbox checked" /> : <FaRegSquare className="checkbox" />}
            <span>{type}</span>
          </div>
        ))}
      </div>

      {/* CAPACITY FILTER */}
      <div className="filter-section">
        <h4>CAPACITY</h4>
        {selectedCapacities.map((capacity, index) => (
          <div key={index} className="filter-item" onClick={() => toggleCapacity(capacity)}>
            {selectedCapacities.includes(capacity) ? <FaCheckSquare className="checkbox checked" /> : <FaRegSquare className="checkbox" />}
            <span>{capacity} Person</span>
          </div>
        ))}
      </div>

      {/* PRICE FILTER */}
      <div className="filter-section">
        <h4>PRICE (PER DAY)</h4>
        <input
          type="range"
          min={minPrice}
          max={maxPriceLimit}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="slider"
        />
        <p>Max. ${maxPrice}.00</p>
      </div>
    </div>
  );
};

export default Navbarside;
