import React from "react";
import Carddata from "../Carddata";

export default function SmallCard() {
  return (
    <>
      <div className="bg-white rounded-lg mt-2  w-[53%] ml-[12.5%]">
        <span className="font-bold ml-5">Don't Miss</span>
        <div className="grid grid-cols-4 gap-4 p-5">
          {Carddata.cardData.map((item) => {
            return (
              <>
                <div>
                  <div>
                    <img className="rounded-lg h-[15vh]" src={item.image} />
                  </div>
                  <div className="mt-2">
                    <p className="text-[14px] hover:text-blue-500 cursor-pointer">{item.title}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
