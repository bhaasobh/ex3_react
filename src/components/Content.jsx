import { useState, useEffect } from 'react';
import './css/Content.css'
import CarCard from './CarCard';
import carsData from "../../src/data/cars.json";





 function Content({ totalCars }) {
  const [cars, setCars] = useState([]);
  useEffect(() => 
    {
      setCars(carsData);   
      
     }, 
  []);


  return (
    <div className='Context'>
   <div className="catalogue-header">
      <text>Cars Catalogue</text>
      <text className="car-count">{totalCars} Cards</text>
      
    </div>
    <div className="car-grid">
      {cars.map((car, index) => (
        
        <CarCard key={index} car={car} />
      ))}
    </div>
    </div>
  )
}

export default Content;
