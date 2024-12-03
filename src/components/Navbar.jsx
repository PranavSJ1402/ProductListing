import {
  AccountCircleOutlined,
  Logout,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React from "react";
import Search from "./Search";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="text-2xl font-semibold text-purple-800">ShopNest</div>

      <div className="flex-grow mx-4">
        <Search />
      </div>

      <div className="flex items-center space-x-6">
        <AccountCircleOutlined
          sx={{ fontSize: 36 }}
          className="text-gray-800 cursor-pointer mr-2"
        />
        <ShoppingCartOutlined
          sx={{ fontSize: 36 }}
          className="text-gray-800 cursor-pointer mr-2 "
        />
        <Logout
          sx={{ fontSize: 36 }}
          className="text-gray-800 cursor-pointer mr-2"
        />
      </div>
    </div>
  );
};

export default Navbar;
