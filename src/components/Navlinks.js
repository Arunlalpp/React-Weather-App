import React from "react";

export default function Navlinks() {
  return (
    <>
      <div className="bg-[#003550] md:block hidden">
        <div className="max-w-[73rem] m-auto px-[0.5rem] py-2 flex flex-row justify-between text-white">
          <span className="cursor-pointer">Today</span>
          <span className="cursor-pointer">Hourly</span>
          <span className="cursor-pointer">10 Day</span>
          <span className="cursor-pointer">Weekend</span>
          <span className="cursor-pointer">Monthly</span>
          <span className="cursor-pointer">Radar</span>
          <span className="cursor-pointer flex flex-row items-center">
            <svg
              set="nav"
              name="video"
              className="fill-white w-[24px] "
              theme="light"
              data-testid="Icon"
              aria-hidden="true"
              role="img"
              viewBox="0 0 24 24"
            >
              <title>Video</title>
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 13.5v-7a.5.5 0 01.8-.4l4.67 3.5c.27.2.27.6 0 .8l-4.67 3.5a.5.5 0 01-.8-.4z"
                fill="currentColor"
              ></path>
            </svg>
            Video
          </span>
          <span className="flex flex-row items-center">
            More Forecasts
            <svg
              set="ui"
              name="triangle-down"
              className="fill-white w-[17px] h-[17px] mt-1 "
              viewBox="0 0 24 24"
            >
              <path d="M23.765 5.167h-23.53l11.75 13.666 11.779-13.666z"></path>
            </svg>
          </span>
        </div>
      </div>
    </>
  );
}
