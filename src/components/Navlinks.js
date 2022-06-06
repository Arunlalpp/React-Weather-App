import React from "react";

export default function Navlinks() {
  return (
    <>
      <div className="bg-[#003550]">
          <div className="max-w-[73rem] m-auto px-[0.5rem] py-2 flex flex-row justify-between text-white">
              <span className="cursor-pointer hover:border-b-4 ">Today</span>
              <span className="cursor-pointer">Hourly</span>
              <span className="cursor-pointer">10 Day</span>
              <span className="cursor-pointer">Weekend</span>
              <span className="cursor-pointer">Monthly</span>
              <span className="cursor-pointer">Rader</span>
              <span className="flex flex-row items-center">More Forecasts
              <svg set="ui" name="triangle-down"className="fill-white w-[17px] h-[17px] mt-1 " viewBox="0 0 24 24"><path d="M23.765 5.167h-23.53l11.75 13.666 11.779-13.666z"></path></svg></span>
          </div>
      </div>
    </>
  );
}
