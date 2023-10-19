"use client";

import Image from "next/image";
import Header from "./Header/page";
import PictureSection from "./PictureSection/page";
import Meals from "./Meals/page";
import { useState } from "react";
import Cart from "./Cart/page";

export default function Home() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = (val:boolean) => {
    setShowCart(val);
  };
  return (
    <main className="flex min-h-screen flex-col items-center">
      {showCart ? (
        <>
          <div className="flex min-h-screen flex-col items-center relative z-0">
            <Header onShow={showCartHandler} />
            <PictureSection />
            <Meals />
          </div>
          <div className="flex items-center justify-center relative z-10 w-screen bg-black h-screen opacity-90" style={{top:"-1000px",left:"0px"}}>
            <Cart onShow={showCartHandler}/>
          </div>
        </>
      ) : (
        <div className="flex min-h-screen flex-col items-center">
          <Header onShow={showCartHandler} />
          <PictureSection />
          <Meals />
        </div>
      )}
    </main>
  );
}
