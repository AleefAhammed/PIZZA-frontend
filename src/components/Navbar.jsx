import React, { useState } from "react";
import pizzalogo from "../assets/pizzalogo.png";
import { Link } from "react-router-dom";
import { TiUser } from "react-icons/ti";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const User = null;
  const navigate = useNavigate()

  return (
    <div className="w-full bg-[#cb3737] fixed top-0 z-20 text-white">
      <div className="py-1 px-5 md:px-10 items-center justify-between flex">
        <div className="flex items-center cursor-pointer" onClick={(e) => {

          e.preventDefault()
          navigate('/')
        }}>
          <h1 className="uppercase text-2xl md:text-3xl font-bold">
            pizza hub
          </h1>
          <img
            src={pizzalogo}
            alt="logopizza"
            className="w-12 h-12 md:w-16 md:h-16 pt-2"
          />
        </div>

        <div className="md:flex hidden gap-5 items-center">
          <Link to="/" className="text-sm font-semibold uppercase">
            Home
          </Link>
          <Link to="/" className="text-sm font-semibold uppercase">
            About Us
          </Link>
        </div>

        <div className="flex items-center gap-5">
          {User ? <button className="button-54 md:flex hidden">Login</button> : <button className="button-54 md:flex hidden">Signup</button>}
          <TiUser className="w-7 h-7 hidden md:flex" />
          <div className="flex gap-2">
            <Link to="/cart">
            <BiShoppingBag className="w-7 h-7 relative" />
            </Link>
            <span className="absolute right-[50px] bg-white text-black w-[15px] h-[15px] rounded-full flex items-center justify-center">
              0
            </span>
          </div>
          <div>
            {open === false ? (
              <AiOutlineMenu
                className="w-5 h-5 md:hidden"
                onClick={() => setOpen(!open)}
              />
            ) : (
              <AiOutlineClose
                className="w-5 h-5 md:hidden"
                onClick={() => setOpen(!open)}
              />
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
      <div
        className={`${
          !open === false ? "left-0" : "left-[-100%]"
        }  md:hidden fixed overflow-y-auto
        duration-500 w-full h-screen z-10 bg-[#cb3737]`}
      >
        <div className="flex flex-col gap-10 px-10 w-full pt-10">
          <Link to="/" className="text-md font-semibold uppercase">
            Home
          </Link>
          <Link to="/" className="text-md font-semibold uppercase">
            About Us
          </Link>
          <button className="bg-red-300 hover:bg-[#991334] w-full p-3 text-black text-lg uppercase">
            Login
          </button>

          <button className="bg-[#dddd9e] hover:bg-[#f4f4b2] w-full p-3 text-black text-lg uppercase">
            Register as new user
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
