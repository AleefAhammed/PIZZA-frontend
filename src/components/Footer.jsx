import React from "react";
import Instagram from "../assets/instagram.png";
import Facebook from "../assets/facebook.png";
import pizzalogo from "../assets/pizzalogo.png";

function Footer() {
  return (
    <div className="w-full z-0 bg-red-300">
      <div className="px-10 md:px-24 py-5">
        <div className="md:flex grid gap-5 justify-between items-center">
          <div className="flex flex-col">
            <h1 className="uppercase text-2xl md:text-3xl font-bold text-black">
              pizza hub
            </h1>
            <img
              src={pizzalogo}
              alt="logopizza"
              className="w-12 h-12 md:w-16 md:h-16 pt-2"
            />
          </div>

          <div className="grid gap-1 items-center ">
            <h1 className="text-lg font-semibold text-black">
              Contact Details
            </h1>
            <p className="text-black text-md">road name, near some mall <br /> Bengaluru - 123456</p>
            <p className="text-black text-md">0123456789</p>
          </div>

          <div className="grid gap-5 items-center">
            <h1 className="text-sm font-normal text-black">
              Our Social Media Handles
            </h1>
            <img src={Instagram} alt="" />
            <img src={Facebook} alt="" className="w-8 h-8" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
