"use client";

import { useContext } from "react";
import HeaderCartButton from "../HeaderCartButton/page";
import CartContext from "../store/cart-context";

const Header = (props: any) => {
  
  return (
    <div className="w-full bg-red-600 p-4 flex justify-between items-center">
      <span className="text-5xl text-white font-extrabold">FOOD APP</span>
      
    </div>
  );
};

export default Header;
