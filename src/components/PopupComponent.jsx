import React from "react";
import { AiOutlineClose } from "react-icons/ai";

function PopupComponent() {
  return (
    <div className="inset-0 fixed bg-black opacity-50 backdrop-blur-sm z-30 text-white justify-center items-center flex">
      <div className="bg-white text-black p3 rounded-2xl">
        <div className="justify-end">
            <AiOutlineClose/>
        </div>
        <div>
            
        </div>
      </div>
    </div>
  );
}

export default PopupComponent;
