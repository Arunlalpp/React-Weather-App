import React from "react";
import CardTitle from "./CardTitle";
import Footer from "./Footer";
import SmallCard from "./SmallCard";
import VideoCardContainer from "./VideoCardContainer";

export default function IndianMap() {
  return (
    <>
      <div className="bg-slate-500">
        <div className="w-[52%] ml-[12.5%] ">
          <div className="p-4 rounded-t-lg bg-white">
            <span className="text-black text-xl font-bold">
              Weather Across India
            </span>
            <img src="https://s.w-x.co/in-saturday.jpg?crop=16:9&width=980&format=pjpg&auto=webp&quality=60" />
            <div>
              <p className="text-[#2B2B2B] text-2xl font-bold mb-4 mt-3 cursor-pointer hover:text-blue-500">
                Weekend Weather (June 4-5): Meghalaya, Assam, West Bengal,
                Sikkim, Karnataka, Tamil Nadu and Kerala In for Heavy Rains
              </p>
            </div>
          </div>
        </div>

        <CardTitle />
        <SmallCard />
        <VideoCardContainer title="Top Video" />
        <Footer />
      </div>
    </>
  );
}
