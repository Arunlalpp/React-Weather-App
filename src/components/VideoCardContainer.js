import React from "react";
import {ImPlay2} from 'react-icons/im'

export default function VideoCardContainer({ title }) {
  return (
    <>
      <div className="bg-white rounded-lg mt-2 lg:w-[52%] lg:ml-[12.5%] w-9xl ml-[3.3%]">
        <span className="font-bold ml-5 mt-4">{title}</span>
        <div className="md:grid md:grid-cols-4 gap-4 p-5 hidden ">
          <div>
            <div>
              <img
                className="rounded-lg h-[15vh]"
                src="https://v.w-x.co/1654260720403_BIGGEST_PLANT_ON_EARTH2_mezz_HighRes_avc_mpeg4_6000kbps.jpg?crop=16:9&width=160&format=pjpg&auto=webp&quality=60" alt="card-title"
              />
            </div>
            <div className="mt-2">
              <p className="md:text-[14px] text-[10px] hover:text-blue-500 cursor-pointer">This Plant in Australia Covers An Area Four Times the Size of New Delhi!</p>
            </div>
          </div>
          <div>
            <div>
              <img
                className="rounded-lg h-[15vh]"
                src="https://v.w-x.co/1654057617138_0530_BRAZIL_FLOODING_HighRes_avc_mpeg4_6000kbps.jpg?crop=16:9&width=160&format=pjpg&auto=webp&quality=60"  alt="card-title"
              />
            </div>
            <div className="mt-2">
              <p className="md:text-[14px] text-[10px] hover:text-blue-500 cursor-pointer">Brazil Flooding Kills Dozens, Leaves Thousands Homeless</p>
            </div>
          </div>
          <div>
            <div>
              <img
                className="rounded-lg h-[15vh]"
                src="https://v.w-x.co/1653912618674_0526_EarthIsLosingITsBioCrust_Text_Editmezz_HighRes_avc_mpeg4_6000kbps.jpg?crop=16:9&width=160&format=pjpg&auto=webp&quality=60"  alt="card-title"
              />
            </div>
            <div className="mt-2">
              <p className="md:text-[14px] text-[10px] hover:text-blue-500 cursor-pointer">Places Getting Dusty: Little-Known Potential Impact of Climate Change</p>
            </div>
          </div>
          <div>
            <div>
              <img
                className="rounded-lg h-[15vh]"
                src="https://v.w-x.co/1654483906949_India_2_Day_TOMORROW_Jun_5_2022_06_10_33AMproxy.jpg?crop=16:9&width=160&format=pjpg&auto=webp&quality=60"  alt="card-title"
              />
            </div>
            <div className="mt-2">
              <p className="md:text-[14px] text-[10px] hover:text-blue-500 cursor-pointer">WATCH: Latest India Weather Forecast: June 6</p>
            </div>
          </div>
        </div>
        <div className="p-5">
          <div>
            <div className="w-full relative">
              <img
                className="rounded-lg m-0 p-0 w-[100%]"
                src="https://v.w-x.co/1654260720403_BIGGEST_PLANT_ON_EARTH2_mezz_HighRes_avc_mpeg4_6000kbps.jpg?crop=16:9&width=160&format=pjpg&auto=webp&quality=60" alt="card-title"
              />
              <ImPlay2 className="absolute top-[40%] left-[40%] text-[4rem] fill-white" />
            </div>
            <div className="mt-2">
              <p className="md:text-[14px] text-[16px] hover:text-blue-500 cursor-pointer">This Plant in Australia Covers An Area Four Times the Size of New Delhi!</p>
            </div>
          </div>
      </div>
      <button className=" ml-6 mb-4 inline-block mt-2 rounded-full px-6 py-2.5 bg-[#1B4DE4] text-white font-medium text-xs leading-tight  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Show more</button>
      </div>
        <button className="md:block hidden ml-6 mb-4 inline-block mt-6 rounded-full px-6 py-2.5 bg-[#1B4DE4] text-white font-medium text-xs leading-tight  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Show more</button>
    </>
  );
}
