import React from "react";
import dinein from "../assets/dinein.png";
import takeaway from "../assets/takeaway.png";
import delivery from "../assets/delivery.png";

function Services() {
  return (
    <div className="flex justify-center items-center w-full m-auto py-28 bg-red-300 z-0">
      <div className="grid gap-16">
        <div>
          <h1 className="text-red-500 text-xl font-semibold text-center tracking-wide">
            Our Services
          </h1>
        </div>
        <div className="max-w-[300px] md:max-w-xl text-center text-black">
          <h1 className="text-2xl font-bold uppercase tracking-wider">
            Sit back and relax <br /> orders at your door step
          </h1>
        </div>
        <div className="flex md:gap-20 gap-8 md:max-w-3xl max-w-[300px] text-black">
          <div className="flex flex-col gap-2 items-center ">
            <img src={delivery} alt="delivery" className="w-16 h-w-16"/>
            <span className="text-lg font-bold">Quick Delivery</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <img src={dinein} alt="dinein" className="w-16 h-w-16"/>
            <span className="text-lg font-bold">Super Dine In</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <img src={takeaway} alt="takeaway" className="w-16 h-w-16"/>
            <span className="text-lg font-bold">Easy pick Up</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
