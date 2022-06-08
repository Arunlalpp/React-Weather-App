import React from "react";
import Carddata from "../Carddata";

export default function SmallCard() {
  return (
    <>
      <div className="bg-white rounded-lg mt-2 lg:w-[52%] lg:ml-[12.5%] w-9xl ml-[3.3%]">
        <span className="font-bold m-5">Don't Miss</span>
        <div className="md:grid grid-cols-4 md:gap-4 md:p-5 p-3 flex flex-row gap-1 overflow-auto overflow-y-hidden scrollbar-hide scroll-smooth">
          {Carddata.cardData.map((item) => {
            return (

                <div className="min-w-[40vw]">
                  <div>
                    <img className="rounded-lg md:h-[15vh] w-[100%] min-h-[15vw]" src={item.image} />
                  </div>
                  <div className="mt-2">
                    <p className="md:text-[14px] text-[14px] hover:text-blue-500 cursor-pointer">{item.title}</p>
                  </div>
                </div>

            );
          })}
        </div>
        <button className=" md:ml-6 ml-3 mb-4 inline-block mt-6 rounded-full px-6 py-2.5 bg-[#1B4DE4] text-white font-medium text-xs leading-tight  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read more</button>
      </div>
    </>
  );
}
