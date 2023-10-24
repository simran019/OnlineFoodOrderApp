"use client";

import Image from "next/image";
import Header from "./Header/page";
import PictureSection from "./PictureSection/page";
import Meals from "./Meals/page";
import { useState } from "react";
import Cart from "./Cart/page";
import CartProvider from "./store/cartProvider";
import HeaderCartButton from "./HeaderCartButton/page";

export default function Home() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = (val: boolean) => {
    setCartIsShown(val);
  };
  return (
    <div className="flex flex-col items-center">
      <CartProvider>
        <Header onShow={showCartHandler} />
        <PictureSection />
        <Meals />
        {cartIsShown && (
          <div
            className="flex items-center justify-center relative z-10 w-screen bg-black h-screen opacity-90"
            style={{ top: "-1100px", left: "0px" }}
          >
            <Cart onShow={showCartHandler} />
          </div>
        )}
        <HeaderCartButton onShow={showCartHandler}/>
      </CartProvider>
    </div>
  );
}
