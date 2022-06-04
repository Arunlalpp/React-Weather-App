import React from "react";

export default function CardContainer() {
  return (
    <div className=" bg-slate-500">
      <div className="flex flex-row w-3/4 m-auto py-2 gap-3">
        <div class="pt-3 max-w-6xl m-auto flex flex-row bg-white rounded-lg">
          <div class="rounded-lg shadow-lg  max-w-2xl p-3">
            <h2 className="text-black text-xl font-bold">Top Stories</h2>
            <div>
              <img
                className="rounded-lg"
                src="https://s.w-x.co/util/image/w/in-june_4.jpg?crop=16:9&width=980&format=pjpg&auto=webp&quality=60"
              />
            </div>
            <div class="mt-3">
              <p class="text-[#2B2B2B] text-2xl font-bold mb-4 cursor-pointer hover:text-blue-500">
                Heavy Rains to Lash Kerala, Karnataka, Tamil Nadu This Weekend;
                Heatwaves Likely over Coastal Andhra Pradesh, Telangana
              </p>
              <p className="mx-w-1lg text-[#393F40]">
                With thunderstorms and lightning also on the horizon, the IMD
                has issued a yellow watch over the region.
                <a className="text-blue-500" href="">
                  Read More
                </a>
              </p>
              <button
                type="button"
                class=" inline-block mt-6 rounded-full px-6 py-2.5 bg-[#1B4DE4] text-white font-medium text-xs leading-tight  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                See More
              </button>
            </div>
          </div>
          <div class="shadow-lg  p-3 mt-6 max-w-[22%]">
            <div>
              <img
                className="rounded-lg"
                src="https://s.w-x.co/util/image/w/in-supriya_patil.jpg?crop=16:9&width=980&format=pjpg&auto=webp&quality=60"
              />
            </div>
            <div className="mt-2 mb-4">
              <p class="text-black text-[14px] cursor-pointer hover:text-blue-500">
                Only One Earth: It’s Time to Take Action to Protect...
              </p>
            </div>
            <div>
              <img
                className="rounded-lg"
                src="https://s.w-x.co/util/image/w/in-cycle_mangalore.jpg?crop=16:9&width=980&format=pjpg&auto=webp&quality=60"
              />
            </div>
            <div className="mt-2 mb-4">
              <p class="text-[#393F40] text-[14px] cursor-pointer hover:text-blue-500">
                Bicycle Day: A Tour Through the History and Evolution
              </p>
            </div>
            <div>
              <img
                className="rounded-lg"
                src="https://s.w-x.co/util/image/w/in-climate_change_3.jpg?crop=16:9&width=980&format=pjpg&auto=webp&quality=60"
              />
            </div>
            <div className="mt-2 mb-4">
              <p className="text-[#393F40] text-[14px] cursor-pointer hover:text-blue-500">
                World Environment Day 2022: Date, Theme, Significance...
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg w-3/5  h-[15%]">
          <div className="p-5">
            <span className="font-bold text-lg mb-0 mt-4 mr-4">Stay Safe</span>
            <img src="https://s.w-x.co/promo-modules-units-features.png?crop=2.85:1&width=320&format=pjpg&auto=webp&quality=60" />
          </div>
        </div>
      </div>
    </div>
  );
}
