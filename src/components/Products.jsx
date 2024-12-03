import React, { useState, useEffect } from "react";
import { AllProducts } from "../../ProductsData";
import Filter from "./Filter";

const Products = ({ category }) => {
  const productsToDisplay = category || AllProducts;
  const [isFilterOpen, setIsFilterOpen] = useState(false); 

  const handleFilterChange = (filteredProducts) => {
    setShuffledProducts(filteredProducts);
  };

  useEffect(() => {
    const shuffled = shuffleArray([...productsToDisplay]);
    setShuffledProducts(shuffled);
  }, [productsToDisplay]);

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-6 text-center">Products For You</h2>

      {isFilterOpen && (
        <div className="flex flex-row items-center bg-gray-100 p-4 rounded-lg mb-4 space-x-4">
          <Filter
            products={productsToDisplay}
            onFilterChange={handleFilterChange}
          />
          <button
            onClick={() => setIsFilterOpen(false)}
            className="bg-red-500 text-white py-2 px-4 rounded-lg focus:outline-none"
          >
            Close Filters
          </button>
        </div>
      )}

      <div className={`grid ${isFilterOpen ? "grid-cols-2" : "grid-cols-3"} gap-4`}>
      </div>

      {!isFilterOpen && (
        <button
          onClick={() => setIsFilterOpen(true)}
          className="w-full md:w-auto bg-blue-500 text-white py-2 px-4 rounded-lg focus:outline-none mt-4"
        >
          Add Filters
        </button>
      )}
    </div>
  );
};


export default Products;
