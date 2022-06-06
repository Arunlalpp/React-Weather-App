import React from "react";

export default function VideoCardContainer({ title }) {
  return (
    <>
      <div className="bg-white rounded-lg mt-2  w-[53%] ml-[12.5%]">
        <span className="font-bold ml-5 mt-4">{title}</span>
        <div className="grid grid-cols-4 gap-4 p-5">
          <div>
            <div>
              <img
                className="rounded-lg h-[15vh]"
                src="https://v.w-x.co/1654260720403_BIGGEST_PLANT_ON_EARTH2_mezz_HighRes_avc_mpeg4_6000kbps.jpg?crop=16:9&width=160&format=pjpg&auto=webp&quality=60"
              />
            </div>
            <div className="mt-2">
              <p className="text-[14px] hover:text-blue-500 cursor-pointer">This Plant in Australia Covers An Area Four Times the Size of New Delhi!</p>
            </div>
          </div>
          <div>
            <div>
              <img
                className="rounded-lg h-[15vh]"
                src="https://v.w-x.co/1654057617138_0530_BRAZIL_FLOODING_HighRes_avc_mpeg4_6000kbps.jpg?crop=16:9&width=160&format=pjpg&auto=webp&quality=60"
              />
            </div>
            <div className="mt-2">
              <p className="text-[14px] hover:text-blue-500 cursor-pointer">Brazil Flooding Kills Dozens, Leaves Thousands Homeless</p>
            </div>
          </div>
          <div>
            <div>
              <img
                className="rounded-lg h-[15vh]"
                src="https://v.w-x.co/1653912618674_0526_EarthIsLosingITsBioCrust_Text_Editmezz_HighRes_avc_mpeg4_6000kbps.jpg?crop=16:9&width=160&format=pjpg&auto=webp&quality=60"
              />
            </div>
            <div className="mt-2">
              <p className="text-[14px] hover:text-blue-500 cursor-pointer">Places Getting Dusty: Little-Known Potential Impact of Climate Change</p>
            </div>
          </div>
          <div>
            <div>
              <img
                className="rounded-lg h-[15vh]"
                src="https://v.w-x.co/1654483906949_India_2_Day_TOMORROW_Jun_5_2022_06_10_33AMproxy.jpg?crop=16:9&width=160&format=pjpg&auto=webp&quality=60"
              />
            </div>
            <div className="mt-2">
              <p className="text-[14px] hover:text-blue-500 cursor-pointer">WATCH: Latest India Weather Forecast: June 6</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
