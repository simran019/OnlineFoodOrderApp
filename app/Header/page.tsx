"use client";

import HeaderCartButton from "../HeaderCartButton/page";

const Header = (props: any) => {
  return (
    <div className="w-screen bg-red-600 p-4 flex justify-between items-center">
      <span className="text-5xl text-white font-extrabold">FOOD APP</span>
      <HeaderCartButton />
    </div>
  );
};

export default Header;
