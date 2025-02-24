
import '../css/Content.css'
import CarCard from './CarCard';
import CarDetails from "./CarDetails";


const Content = ({ searchQuery, selectedTypes, selectedCapacities, maxPrice , selectedCar, setSelectedCar ,cars }) => {
 

  const filteredCars = cars.filter((car) => {
    const matchesSearch = searchQuery.length > 1 ? car.name.toLowerCase().includes(searchQuery.toLowerCase()) : true;
    const matchesType = selectedTypes.includes(car.type);
    const matchesCapacity = selectedCapacities.includes(String(car.capacity));
    const matchesPrice = car.price <= maxPrice;

    return matchesSearch && matchesType && matchesCapacity && matchesPrice;
  });

  return (
    <>

      {/* Show CarDetails when a car is selected */}
      {selectedCar ? (
        <div>
          
          <CarDetails car={selectedCar} />
        </div>
      ) : (
        <div className="content">
      <h2 className="catalogue-title">
        Cars Catalogue <span className="car-count">({filteredCars.length} Cars)</span>
      </h2>
        <div className="car-grid">
          {filteredCars.length > 0 ? (
            filteredCars.map((car, index) => (
              <CarCard key={index} car={car} onClick={() => setSelectedCar(car)} />
            ))
          ) : (
            <p>No cars found</p>
          )}
        </div>
        </div>
      )}
    </>
  );
};

export default Content;