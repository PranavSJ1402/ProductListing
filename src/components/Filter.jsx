import React, { useState } from "react";
import { AllProducts } from "../../ProductsData";
import ProductGrid from "./ProductGrid"; // Import the ProductGrid component

const Filter = () => {
  const [filteredProducts, setFilteredProducts] = useState(AllProducts); 
  const [selectedCategories, setSelectedCategories] = useState([]); 
  const [selectedPriceRange, setSelectedPriceRange] = useState([]); 
  const categoryFilters = ["Clothing", "Electronics", "Stationery", "Makeup"];
  const priceFilters = ["Under ₹1000", "₹1000-₹5000", "₹5000-₹10000", "Above ₹10000"];

  const applyCategoryFilter = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((cat) => cat !== category)
      : [...selectedCategories, category]; 
    setSelectedCategories(updatedCategories);
    filterProducts(updatedCategories, selectedPriceRange);
  };

  const applyPriceFilter = (price) => {
    const updatedPrices = selectedPriceRange.includes(price)
      ? selectedPriceRange.filter((range) => range !== price)
      : [...selectedPriceRange, price]; 
    setSelectedPriceRange(updatedPrices);
    filterProducts(selectedCategories, updatedPrices);
  };

  const filterProducts = (categories, prices) => {
    const filtered = AllProducts.filter((product) => {
      const matchesCategory = categories.length
        ? categories.some((cat) => {
            if (cat === "Clothing") return ["Cotton", "Denim", "Leather"].includes(product.material);
            if (cat === "Electronics")
              return product.name.toLowerCase().includes("headphones") ||
                     product.name.toLowerCase().includes("hair dryer");
            if (cat === "Stationery")
              return ["Paper", "Metal", "Wood and Plastic"].includes(product.material);
            if (cat === "Makeup") return product.name.toLowerCase().includes("makeup");
            return false;
          })
        : true; 

      const matchesPrice = prices.length
        ? prices.some((priceRange) => {
            if (priceRange === "Under ₹1000") return product.price < 1000;
            if (priceRange === "₹1000-₹5000") return product.price >= 1000 && product.price <= 5000;
            if (priceRange === "₹5000-₹10000") return product.price > 5000 && product.price <= 10000;
            if (priceRange === "Above ₹10000") return product.price > 10000;
            return false;
          })
        : true; 
      return matchesCategory && matchesPrice;
    });

    setFilteredProducts(filtered);
  };

  return (
    <div className="p-6">
      <div className="flex gap-8">
        <div className="w-1/2 text-center">
          <h2 className="font-bold text-lg mb-4">Category Filters</h2>
          <div className="grid grid-cols-2 gap-4">
            {categoryFilters.map((filter, index) => (
              <button
                key={index}
                onClick={() => applyCategoryFilter(filter)}
                className={`px-4 py-2 border rounded-lg ${selectedCategories.includes(filter) ? "bg-blue-600 text-white" : "bg-gray-100"} hover:bg-blue-400`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="w-1/2 text-center">
          <h2 className="font-bold text-lg mb-4">Price Filters</h2>
          <div className="grid grid-cols-2 gap-4">
            {priceFilters.map((filter, index) => (
              <button
                key={index}
                onClick={() => applyPriceFilter(filter)}
                className={`px-4 py-2 border rounded-lg ${selectedPriceRange.includes(filter) ? "bg-green-600 text-white" : "bg-gray-100"} hover:bg-green-400`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Filter;
