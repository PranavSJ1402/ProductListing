import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

const ProductSpecification = ({ label, value }) => (
  <div>
    <p className="text-lg text-gray-700 font-semibold">{label}:</p>
    <p className="text-md text-gray-600">{value}</p>
  </div>
);

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [isInCart, setIsInCart] = useState(false);

  const handleAddToCart = () => {
    setIsInCart(true);
  };

  if (!product) {
    return (
      <div className="text-center mt-10">
        <p className="text-xl text-gray-700">Product not found!</p>
        <button
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row">
      <nav className="mb-6 p-4">
        <Link to="/" className="text-blue-600 hover:underline">
          <ArrowBack />
        </Link>
      </nav>

      <div className="flex-grow p-6 space-y-6 md:w-3/4">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <div className="w-full md:w-1/2">
              <img
                src={product.image || "/placeholder-image.png"}
                alt={product.name}
                className="w-full h-80 object-cover rounded-lg shadow-lg"
                onError={(e) => (e.target.src = "/placeholder-image.png")}
              />
            </div>

            <div className="w-full md:w-1/2 space-y-4">
              <p className="text-xl font-semibold text-gray-700">₹{product.price}</p>
              <p className="text-lg text-gray-600">
                Rating: {product.rating} ⭐ ({product.reviews} reviews)
              </p>
              <button
                className={`w-full md:w-auto py-2 px-6 rounded-lg shadow-md transition duration-300 ${
                  isInCart
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
                onClick={handleAddToCart}
                disabled={isInCart}
              >
                {isInCart ? "Added to Cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Product Details</h2>
          <p className="text-md text-gray-600 mt-2">{product.description}</p>
        </div>
      </div>

      <div className="w-full md:w-1/4 bg-gray-50 p-6 space-y-6">
        <h2 className="text-xl font-semibold text-gray-800">Additional Information</h2>
        <div className="space-y-4">
          <ProductSpecification label="Brand" value={product.brand} />
          <ProductSpecification label="Material" value={product.material} />
          <ProductSpecification label="Size available" value={product.size} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
