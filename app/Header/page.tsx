"use client";
import Image from "next/image";
import CartIcon from "../../public/images/page.svg";

const Header = () => {
  return (
    <div className="w-screen bg-red-600 p-4 flex justify-between items-center">
      <span className="text-5xl text-white font-extrabold">FOOD APP</span>
      <button className="flex bg-red-800 justify-center gap-2 items-center text-white w-64 p-4 rounded-full">
        <div>
          <Image src={CartIcon} width={50} height={50} alt="cart_icon" />
        </div>
        <span>Your Cart</span>
        <p className="bg-red-500 px-2 rounded-xl">2</p>
      </button>
    </div>
  );
};

export default Header;
