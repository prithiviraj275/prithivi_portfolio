import React, { useState } from "react";
import { Link } from "react-router-dom";
import {  FaBars, FaTimes } from "react-icons/fa";


const Nav = () => {
  const navItems = ["About", "Skills", "Experience", "Projects", "Education"];
  const [openNav, setOpenNav] = useState(false);

  return (
    <section className="Nav cursor-pointer sticky top-0 h-20 w-full text-purple-text drop-shadow-md shadow-md font-cairo bg-white z-10">
      <div className="NavContainer flex h-full w-full justify-between items-center">
        <Link
          className="NavLogo outline-none  flex flex-row justify-center items-center font-bold max-[767px]:w-2/4  max-[320px]:w-2/4 min-[768px]:w-1/4 "
          to="/"
        >
          <span className="m-2 font-cairo tracking-widest text-purple-text text-[2rem]">
            Portfolio
          </span>
        </Link>
        <ul className="NavItems hidden md:flex justify-evenly items-center font-bold w-2/4">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="transition-all duration-200 hover:text-pink-500  hover:text-2xl focus:outline-none outline-none  active:outline-none hover:outline-none visited:outline-none focus:text-2xl focus:text-pink-500  "
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="ButtonContainer hidden md:flex flex-row justify-center items-center w-1/5 h-16">
          <a
            href="#connect"
            className="h-10 w-40 border-2 flex justify-center items-center outline-none focus:text-neutral-100 focus:bg-purple-text focus:outline-none border-purple-text rounded-full hover:bg-purple-text hover:text-neutral-100 font-semibold"
          >
            Connect With Me
          </a>
        </div>
        <div className="MobileItems hidden max-[320px]:flex justify-end mr-8 items-center font-bold w-2/4 visible max-md:flex justify-end mr-8 items-center font-bold w-2/4 visible">
          {openNav ? (
            <FaTimes className="size-6" onClick={() => setOpenNav(!openNav)} />
          ) : (
            <FaBars className="size-6" onClick={() => setOpenNav(!openNav)} />
          )}
        </div>
      </div>
      {openNav ? (
        <ul
          className="NavItems font-bold max-[767px]:flex justify-evenly flex-col items-center w-full h-52 bg-white border-2 transition-all duration-300 max-[320px]:flex justify-evenly flex-col items-center w-full h-52 bg-white border-2 transition-all duration-300"
          style={{
            borderRadius: "0 0 20px 20px",
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
            opacity: openNav ? "100%" : "0",
            zIndex: openNav ? "1000" : "-1000",
          }}
        >
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => {
                  setOpenNav(!openNav);
                }}
                className="transition-all duration-200 hover:text-pink-500 hover:text-2xl focus:outline-none outline-none  active:outline-none hover:outline-none visited:outline-none focus:text-2xl focus:text-pink-500 "
              >
                {item}
              </a>
            </li>
          ))}
          <a
            href={`#connect`}
            onClick={() => {
              setOpenNav(!openNav);
            }}
            className="transition-all duration-200 hover:text-pink-500 hover:text-2xl focus:outline-none outline-none  active:outline-none active:bg-transparent hover:outline-none visited:outline-none focus:text-2xl focus:text-pink-500 "
          >
            Connect With Me
          </a>
        </ul>
      ) : (
        ""
      )}
    </section>
  );
};

export default Nav;
