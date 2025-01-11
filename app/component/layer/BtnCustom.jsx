import Link from "next/link";
import React from "react";

const BtnCustom = ({ className, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={` text-lg font-DM rounded-full bg-white hover:bg-gradient-to-r from-[#FE651B] to-[#FFAA52] duration-500 hover:text-white hover:scale-110 ${className}`}
    >
      <Link href="/" >{text}</Link>
    </button>
  );
};

export default BtnCustom;
