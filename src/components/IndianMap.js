import React from "react";
import CardTitle from "./CardTitle";
import Footer from "./Footer";
import SmallCard from "./SmallCard";
import VideoCardContainer from "./VideoCardContainer";

export default function IndianMap() {
  return (
		<>
			<div className="lg:w-[52%] lg:ml-[12.5%] w-9xl ml-[3.3%] md:pt-0 pt-3">
				<div className="p-3 rounded-t-lg bg-white">
					<span className="text-[#2b2b2b] text-xl font-bold">
						Weather Across India
					</span>
					<img
						className="rounded-lg mt-3"
						src="https://s.w-x.co/in-saturday.jpg?crop=16:9&width=980&format=pjpg&auto=webp&quality=60"
						alt="IndianMap"
					/>
					<div>
						<p className="text-[#2B2B2B] md:text-2xl text-lg  md:font-bold font-normal leading-[1.4] mb-4 mt-3 cursor-pointer hover:text-blue-500">
							Weekend Weather (June 4-5): Meghalaya, Assam, West Bengal, Sikkim,
							Karnataka, Tamil Nadu and Kerala In for Heavy Rains
						</p>
					</div>
				</div>
			</div>

			<CardTitle />
			<SmallCard />
			<VideoCardContainer title="Top Video" />
			<Footer />
		</>
	);
}
