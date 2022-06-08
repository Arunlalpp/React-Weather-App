import React from "react";

export default function CardContainer() {
  return (
    <div className=" bg-slate-500 pt-3 pb-3">
      <div className="md:flex flex-row w-8xl m-auto py-2 gap-3 pt-3 md:block hidden">
        <div class="pt-3 max-w-6xl m-auto flex lg:flex-row bg-white rounded-lg  flex-col">
          <div class="rounded-lg  max-w-2xl p-3 md:block hidden">
            <h2 className="text-black text-xl font-bold pb-4">Top Stories</h2>
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
                <a className="text-blue-500" href="#">
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
          <div class="p-3 mt-10 lg:max-w-[22%] m-auto max-w[40%] md:block hidden">
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
        <div className="bg-white rounded-lg w-[64%]  h-[15%] md:block hidden">
          <div className="p-5">
            <span className="font-bold text-lg mb-0 mt-4 mr-4">Stay Safe</span>
            <img src="https://s.w-x.co/promo-modules-units-features.png?crop=2.85:1&width=320&format=pjpg&auto=webp&quality=60" />
          </div>
        </div>
      </div>
      <div className="bg-white w-9xl m-auto rounded-lg md:hidden block">
        <h2 className="text-black text-xl font-bold pb-4">Top Stories</h2>
        <div className="md:grid grid-cols-4 md:gap-12 flex flex-row gap-2 overflow-auto overflow-y-hidden scrollbar-hide scroll-smooth">
          <div class="rounded-lg  max-w-2xl p-2">
            <div className="md:min-w-[0] min-w-[72vw]">
              <div>
              <img
                className="md:h-[15vh] w-[100%] rounded-lg"
                src="https://s.w-x.co/in-kerala%20rain.jpg?crop=16:9&width=320&format=pjpg&auto=webp&quality=60" 
              />
              </div>
                  <div className="mt-3 hover:text-blue-500 cursor-pointer md:text-[14px] text-[13px]  ">
                    <p>Monsoon Spike: Heavy Rains to Lash Kerala and Karnataka Until June 11; Tamil Nadu, Andhra In for Scattered</p>
                  </div>
            </div>
          </div>
          <div class="rounded-lg  max-w-2xl p-3">
            <div className="md:min-w-[0] min-w-[72vw]">
              <div>
              <img
                className="md:h-[15vh] w-[100%] rounded-lg"
                src="https://s.w-x.co/in-shark%282%29.jpg?crop=16:9&width=160&format=pjpg&auto=webp&quality=60  "
              />
              </div>
                  <div className="mt-3 hover:text-blue-500 cursor-pointer md:text-[14px] text-[13px]  ">
                    <p>Monsoon Spike: Heavy Rains to Lash Kerala and Karnataka Until June 11; Tamil Nadu, Andhra In for Scattered</p>
                  </div>
            </div>
          </div>
          <div class="rounded-lg  max-w-2xl p-3">
            <div className="md:min-w-[0] min-w-[72vw]">
              <div>
              <img
                className="md:h-[15vh] w-[100%] rounded-lg"
                src="https://s.w-x.co/in-coronavirus_39_0.jpg?crop=16:9&width=160&format=pjpg&auto=webp&quality=60"
              />
              </div>
                  <div className="mt-3 hover:text-blue-500 cursor-pointer md:text-[14px] text-[13px]  ">
                    <p>Monsoon Spike: Heavy Rains to Lash Kerala and Karnataka Until June 11; Tamil Nadu, Andhra In for Scattered</p>
                  </div>
            </div>
          </div>
        </div>
        <div className="md:grid grid-cols-4 md:gap-12 flex flex-row gap-2 overflow-auto overflow-y-hidden scrollbar-hide scroll-smooth">
          <div class="rounded-lg  max-w-2xl p-3">
            <div className="md:min-w-[0] min-w-[35vw]">
              <div>
              <img
                className="md:h-[15vh] w-[100%] rounded-lg"
                src="https://s.w-x.co/in-heatwave_delhi.jpg?crop=16:9&width=160&format=pjpg&auto=webp&quality=60" 
              />
              </div>
                  <div className="mt-3 hover:text-blue-500 cursor-pointer md:text-[14px] text-[13px]  ">
                    <p>Heatwaves to Hold on to North, Central India From June 7-9</p>
                  </div>
            </div>
          </div>
          <div class="rounded-lg  max-w-2xl p-3">
            <div className="md:min-w-[0] min-w-[35vw]">
              <div>
              <img
                className="md:h-[15vh] w-[100%] rounded-lg"
                src="https://s.w-x.co/in-shark%282%29.jpg?crop=16:9&width=160&format=pjpg&auto=webp&quality=60  "
              />
              </div>
                  <div className="mt-3 hover:text-blue-500 cursor-pointer md:text-[14px] text-[13px]  ">
                    <p>Heatwaves to Hold on to North, Central India From June 7-9</p>
                  </div>
            </div>
          </div>
          <div class="rounded-lg  max-w-2xl p-3">
            <div className="md:min-w-[0] min-w-[35vw]">
              <div>
              <img
                className="md:h-[15vh] w-[100%] rounded-lg"
                src="https://s.w-x.co/in-coronavirus_39_0.jpg?crop=16:9&width=160&format=pjpg&auto=webp&quality=60"
              />
              </div>
                  <div className="mt-3 hover:text-blue-500 cursor-pointer md:text-[14px] text-[13px]  ">
                    <p>Heatwaves to Hold on to North, Central India From June 7-9</p>
                  </div>
            </div>
          </div>
        </div>
        <button className=" md:ml-6 ml-3 mb-4 inline-block mt-6 rounded-full px-6 py-2.5 bg-[#1B4DE4] text-white font-medium text-xs leading-tight  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read more</button>
      </div>
    </div>
  );
}
