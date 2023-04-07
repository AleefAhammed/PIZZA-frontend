import React from "react";
import pizzadelivery from "../assets/pizzadelivery.png"
import {MdDeliveryDining} from "react-icons/md"
import {BsShieldFillCheck} from "react-icons/bs"

function HeroSection() {
  return (
    <div className="w-full z-0">
      <div className="grid md:grid-cols-2 grid-cols-1 w-full justify-around py-36 px-10 md:py-40">
        <div className="flex-col flex gap-4 md:pt-20 text-black">
          <h1 className="text-2xl md:text-4xl font-bold max-w-xl tracking-wider text-red-600">Are you hungry ?</h1>
          <h1 className="text-5xl font-bold max-w-xl tracking-wider">Order Some Delicious Pizza</h1>
          <p className="text-2xl font-semibold max-w-lg">Get <span className="text-blue-500">30%</span> discount on your first order</p>
          <p className="text-xl font-bold text-red-600">Hurry up, Grab your pizza now !</p>
          <div className="grid md:flex gap-10 items-center">
            <div className="flex gap-1 items-center">
            <MdDeliveryDining className="w-5 h-5 bg-red-500 rounded-full p-1"/>
             <span>Free Delivery</span>
            </div>
            <div className="flex items-center gap-1">
              <BsShieldFillCheck className="w-5 h-5 bg-red-500 rounded-full p-1 text-green-500"/>
              <span>100% safe and secure payments</span>
            </div>
          </div>
        </div>
        <div>
          <img src={pizzadelivery} alt="" className="object-cover"/>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
