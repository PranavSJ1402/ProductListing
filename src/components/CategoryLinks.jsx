import React from "react";

const CategoryLinks = () => {
  const categories = [
    { name: "Clothing", varieties: ["T-Shirts", "Jeans", "Jackets", "Dresses", "Sweaters"] },
    { name: "Kids", varieties: ["Boys", "Girls", "Toys", "Baby Care"] },
    { name: "Home & Kitchen", varieties: ["Furniture", "Kitchenware", "Home Decor", "Bedding"] },
    { name: "Bags & Footwear", varieties: ["Bags", "Shoes", "Socks", "Sandals"] },
    { name: "Beauty & Health", varieties: ["Skincare", "Makeup", "Haircare", "Fragrance"] },
    { name: "Electronics", varieties: ["Phones", "Laptops", "Headphones", "Accessories"] },
  ];

  return (
    <div className="bg-white py-4">
      <div className="container mx-auto flex justify-around">
        {categories.map((category, index) => (
          <div key={index} className="relative group">
            <a href="#" className="text-gray-800 hover:text-purple-500 block py-2 px-4">
              {category.name}
            </a>

            <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 p-2 w-40">
              {category.varieties.map((variety, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="block text-gray-700 hover:text-purple-500 py-1 px-2"
                >
                  {variety}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <hr className="mt-5" />
    </div>
  );
};

export default CategoryLinks;
