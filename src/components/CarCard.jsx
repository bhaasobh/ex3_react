import React from "react";
import { FaHeart } from "react-icons/fa";
import "./css/CarCard.css";

const CarCard = ({ car, onClick }) => {
  const carImage = require(`../data/images/${car.name}.png`);

  return (
    <div className="car-card" onClick={onClick}>
      <div className="card-header">
        <h3>{car.name}</h3>
        <FaHeart className={`heart-icon ${car.favorite ? "red" : "gray"}`} />
      </div>

      <img src={carImage} alt={car.name} className="car-image" />

      <div className="car-details">
        <span>{car.fuel}L</span>
        <span>{car.transmission}</span>
        <span>{car.capacity} People</span>
      </div>

      <div className="card-footer">
        <p className="price">${car.price}/day</p>
        <button className="rent-btn">Rent Now</button>
      </div>
    </div>
  );
};

export default CarCard;
