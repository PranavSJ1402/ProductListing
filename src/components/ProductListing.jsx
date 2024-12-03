import React, { useState } from "react";
import ProductGrid from "./ProductGrid";
import Filter from "./Filter";

const ProductListing = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilterChange = (filtered) => {
    setFilteredProducts(filtered);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <Filter products={products} onFilterChange={handleFilterChange} />

      <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      </div>
    </div>
  );
};

export default ProductListing;
