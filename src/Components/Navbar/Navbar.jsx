import React, { useState } from "react";
import logoImg from "../../assets/logo.png";
import dollarImage from "../../assets/dollar-1.png";
import { Menu, X } from "lucide-react";
const navItems = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Fixture",
    path: "/fixture",
  },
  {
    id: 3,
    name: "Teams",
    path: "/teams",
  },
  {
    id: 4,
    name: "Schedules",
    path: "/schedules",
  },
];

const Navbar = ({ currentBalance }) => {
  const items = navItems.map((navItem) => (
    <a className="font-normal" href={navItem.path} key={navItem.id}>
      {navItem.name}
    </a>
  ));
  const [isShown, setIsShown] = useState(false);
  return (
    <div className={`navbar flex items-center justify-between`}>
      <div className="">
        <a className="">
          <img src={logoImg} alt="" />
        </a>
      </div>
      <div className="hidden md:flex items-center gap-12">
        <div className="flex items-center gap-12">{items}</div>
        <button className="btn flex items-center gap-3">
          <span>{currentBalance} Coin</span>
          <img src={dollarImage} alt="" />
        </button>
      </div>
      <div className="block md:hidden">
        <div className="flex justify-end">
          <button
            onClick={() => setIsShown(!isShown)}
            className="cursor-pointer"
          >
            {isShown ? <X size={30}></X> : <Menu size={30}></Menu>}
          </button>
        </div>
        <div
          className={`bg-linear-to-b from-[#1E1B4B] to-[#312E81] rounded-2xl text-white absolute flex flex-col right-2 ${isShown ? "top-15" : "-top-190"} duration-1000 p-5 gap-3`}
        >
          {items}
          <button className="btn flex items-center gap-2">
            <span>{currentBalance} Coin</span>
            <img src={dollarImage} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
