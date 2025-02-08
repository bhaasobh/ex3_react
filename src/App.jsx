import React, { useState ,useEffect} from "react";
import Navbartop from "./components/Navbartop";
import Navbarside from "./components/Navbarside";
import Content from "./components/Content";
import Footer from "./components/Footer";
import carsData from "./data/cars.json";
import './App.css'

const App = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => 
    {
      setCars(carsData);
     
     }, 
     
  []);


  const allTypes = [...new Set(cars.map((car) => car.type))];
  const allCapacities = [...new Set(cars.map((car) => String(car.capacity)))];

  const minPrice = cars.length > 0 ? Math.min(...cars.map(car => car.price)) : 0;
const maxPricee = cars.length > 0 ? Math.max(...cars.map(car => car.price)) : 100;
 

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTypes, setSelectedTypes] = useState(allTypes); 
  const [selectedCapacities, setSelectedCapacities] = useState(allCapacities);
  const [maxPrice, setMaxPrice] = useState(maxPricee); 

  const [selectedCar, setSelectedCar] = useState(null);

  const countCarsByType = (cars) => {
    return cars.reduce((acc, car) => {
      acc[car.type] = (acc[car.type] || 0) + 1;
      return acc;
    }, {});
  };
  
  // Assuming `cars` is your JSON array of car objects
  const carCounts = countCarsByType(cars);

  return (
    <div >
      <Navbartop searchQuery={searchQuery} setSearchQuery={setSearchQuery} setSelectedCar={setSelectedCar} />
      <div className="middleContainer">
        <Navbarside
          selectedTypes={selectedTypes}
          setSelectedTypes={setSelectedTypes}
          selectedCapacities={selectedCapacities}
          setSelectedCapacities={setSelectedCapacities}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          minPrice={minPrice}
          maxPriceLimit={maxPricee}
          carCounts={carCounts}
        />
        <Content
          searchQuery={searchQuery}
          selectedTypes={selectedTypes}
          selectedCapacities={selectedCapacities}
          maxPrice={maxPrice}
          selectedCar={selectedCar} 
          setSelectedCar={setSelectedCar}
        />
      </div>
      <Footer/>
    </div>
  );
};

export default App;
