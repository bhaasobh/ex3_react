import React from "react";
import { FaHeart } from "react-icons/fa";
import "./css/CarDetails.css";



const CarDetails = ({ car }) => {
  const carImage = require(`../data/images/${car.name}.png`);
  
  if (!car) return null; // Prevent rendering if no car is selected

  return (
    
    <div className="car-details">
      
      {/* Left Side - Images & Description */}
      <div className="car-images">
        <span>Car Details</span>
        <div className="main-image">
          <img src={carImage} alt={car.name} />
        </div>
        <div className="thumbnail-images">
  {[...Array(3)].map(( index) => {
    
    return <img key={index} src={carImage} alt="car interior" />;
  })}
</div>
      </div>

      {/* Right Side - Car Details */}
      <div className="car-info">
        <h2>{car.name}</h2>
        <p className="reviews">⭐⭐⭐⭐⭐ 440 Reviewers</p>
        <p className="description">{car.description}</p>

        <div className="details-grid">
          <div>Type Car:<strong>{car.type}</strong></div>
          <div>Capacity: <strong>{car.capacity} Person</strong></div>
          <div>Steering: <strong>{car.transmission}</strong></div>
          <div>Gasoline:<strong>{car.fuel}L</strong></div>
        </div>

        <div className="price-section">
          <p className="price">${car.price}/days</p>
          <button className="rent-btn">Rent Now</button>
        </div>

        {/* Favorite Heart */}
        
      </div><FaHeart className={`heart-icon ${car.favorite ? "red" : "gray"}`} />
    </div>
  );
};

export default CarDetails;
