import React from "react";
import { FaGasPump, FaCogs, FaUser } from "react-icons/fa";
import "./css/CarCard.css";



const CarCard = ({ car }) => {
  const carImage = require(`../data/images/${car.name}.png`);

  console.log("care",car.image);
  return (
    <div className="car-card">
      <div className="card-header">
  <div className="card-title">
    <h3>{car.name}</h3>
    <span className="car-type">{car.type}</span>
  </div>
  <span className="heart">❤️</span>
</div>

      <img src={carImage} alt={car.name} className="car-image" />

      <div className="car-details">
        <span><FaGasPump /> {car.fuel}L</span>
        <span><FaCogs /> {car.transmission}</span>
        <span><FaUser /> {car.capacity} People</span>
      </div>

      <div className="card-footer">
        <p className="price">${car.price} <span>/ day</span></p>
        <button className="rent-btn">Rent Now</button>
      </div>
    </div>
  );
};

export default CarCard;
