import React from "react";
import Carddata from "../Carddata";

export default function SmallCard() {
  return (
    <>
      <div className="bg-white rounded-lg mt-2 lg:w-[52%] lg:ml-[12.5%] w-9xl ml-[3.3%]">
        <span className="font-bold ml-5">Don't Miss</span>
        <div className="grid lg:grid-cols-4 gap-4 p-5 grid-cols-2">
          {Carddata.cardData.map((item) => {
            return (
              <>
                <div>
                  <div>
                    <img className="rounded-lg h-[15vh]" src={item.image} />
                  </div>
                  <div className="mt-2">
                    <p className="md:text-[14px] text-[10px] hover:text-blue-500 cursor-pointer">{item.title}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <button className=" ml-6 mb-4 inline-block mt-6 rounded-full px-6 py-2.5 bg-[#1B4DE4] text-white font-medium text-xs leading-tight  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read more</button>
      </div>
    </>
  );
}
