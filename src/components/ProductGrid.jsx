import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Star } from "@mui/icons-material";

const ProductGrid = ({ products }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md p-3 hover:shadow-lg hover:scale-105 transition-transform duration-300 max-w-xs border hover:border-blue-400"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-40 object-cover rounded-t-lg cursor-pointer"
            onClick={() => navigate(`/ProductDetails/${product.id}`)}
          />

          <Link to={`/ProductDetails/${product.id}`}>
            <div className="mt-3 space-y-2">
              <h3 className="text-sm font-medium truncate">{product.name}</h3>
              <p className="text-gray-700 text-sm">₹{product.price}</p>

              <div className="flex items-center space-x-2">
                <p className="inline-flex items-center bg-green-600 text-white px-2 py-1 rounded-full text-xs">
                  {product.rating}
                  <Star className="ml-1" fontSize="small" />
                </p>
                <span className="text-gray-500 text-xs">
                  {product.reviews} reviews
                </span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
