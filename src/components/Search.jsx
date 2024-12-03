import { SearchOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AllProducts } from "../../ProductsData";

const Search = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Filter products based on the query
    if (value) {
      const filtered = AllProducts.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (id) => {
    // Navigate to the product details page
    navigate(`/ProductDetails/${id}`);

    // Clear the suggestions and the query
    setSuggestions([]);
    setQuery("");
  };

  return (
    <div className="w-full p-4">
      {/* Increased width of the search bar */}
      <div className="flex items-center w-3/4 mx-auto bg-gray-100 p-2 border-2 border-black-500 rounded-md">
        <input
          type="text"
          placeholder="Search for shoes, electronics, clothing, etc."
          className="w-full p-2 bg-transparent outline-none placeholder-gray-500"
          value={query}
          onChange={handleSearch}
        />
        <SearchOutlined className="text-gray-500 cursor-pointer" />
      </div>

      {/* Suggestions */}
      {suggestions.length > 0 && (
        <ul className="mt-2 bg-white border rounded-md shadow-md">
          {suggestions.map((product) => (
            <li
              key={product.id}
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSuggestionClick(product.id)}
            >
              {product.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
