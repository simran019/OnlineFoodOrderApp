"use client";

import Image from "next/image";
import CartIcon from "../../public/images/page.svg";
import { useContext, useState } from "react";
import CartContext from "../store/cart-context";

const HeaderCartButton = (props: any) => {

  const cartCtx = useContext(CartContext);
  const noOfItems = cartCtx.items.reduce((currentNo, item: any) => {
    return currentNo + item.amount;
  }, 0);
  
  

  const clickHandler = () => {
    props.onShow(true);
  };

  return (
    <button
      className={`flex justify-center gap-2 items-center text-white w-64 p-4 rounded-full sticky bottom-5 self-end bg-red-800`}
      onClick={clickHandler}
    >
      <div>
        <Image src={CartIcon} width={50} height={50} alt="cart_icon" />
      </div>
      <span>Your Cart</span>
      <p className="bg-red-800 px-2 rounded-xl">{noOfItems}</p>
    </button>
  );
};

export default HeaderCartButton;
