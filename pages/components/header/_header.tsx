import React, { ReactElement, useState } from "react";
import Hamburger from "hamburger-react";
import { BsCart } from "react-icons/bs";
import {
  GiCupcake,
  GiPieSlice,
  GiFrenchFries,
  GiWaterBottle,
} from "react-icons/gi";
import Link from "next/link";

function Header(): ReactElement {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <div className="w-screen h-[4rem] bg-blue-200 flex items-center justify-between p-4 fixed z-10">
        <Hamburger
          color="#2C89FF"
          direction="right"
          toggled={isOpen}
          toggle={setOpen}
        />
        <Link href={"/"}>
          <h1 className="font-bold text-pink-500 text-xl cursor-pointer">
            Belluzzi Bolos <span className="text-[#2C89FF]">-</span>{" "}
            <span className="text-pink-400">Cardápio</span>
          </h1>
        </Link>
        <BsCart className="text-[#2C89FF] text-2xl mr-4" />
      </div>
      <div
        className={`pt-[4rem] fixed w-screen ${
          !isOpen && "-translate-y-full"
        } ease-in duration-300`}
      >
        {isOpen && (
          <div
            className={`bg-blue-50 h-[calc(100vh-4rem)] flex flex-col justify-between `}
          >
            <div className="space-y-10 px-7 py-7 ">
              <div className="flex items-center space-x-3">
                {/* <GiCupcake className="text-[#2C89FF] text-xl" /> */}
                <h1 className="text-[#2C89FF] text-xl cursor-pointer">Bolos</h1>
              </div>
              <div className="flex items-center space-x-3">
                {/* <GiPieSlice className="text-[#2C89FF] text-xl" /> */}
                <h1 className="text-[#2C89FF] text-xl cursor-pointer">Tortas</h1>
              </div>
              <div className="flex items-center space-x-3">
                {/* <GiFrenchFries className="text-[#2C89FF] text-xl" /> */}
                <h1 className="text-[#2C89FF] text-xl cursor-pointer">Salgados</h1>
              </div>
              <div className="flex items-center space-x-3">
                {/* <GiWaterBottle className="text-[#2C89FF] text-xl" /> */}
                <h1 className="text-[#2C89FF] text-xl cursor-pointer">Bebidas</h1>
              </div>
            </div>
            <h1 className="text-center text-[#2C89FF]">
              ©Fernando Peres Carvalho
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
