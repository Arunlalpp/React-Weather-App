import React from "react";
import { VscSearch } from "react-icons/vsc";
import { BsCloudSun } from "react-icons/bs";

export default function Searchbar() {
  return (
    <div class="flex">
      <div class="mb-3 xl:w-96 group mt-[1rem] pb-1">
        <div class="input-group relative flex items-stretch w-full z-10 pb-1">
          <input
            type="search"
            class="relative flex-auto focus:outline-2  outline-white text-center min-w-0  placeholder-white block w-full  px-3 py-1.5 text-[16px] font-normal text-white bg-[#337A9E] rounded-3xl m-0"
            placeholder="Search City or Postcode "
          />
          <div className="absolute text-white f left-[92%] top-[28%]">
            <VscSearch c />
          </div>
        </div>
        <div className="bg-white rounded-lg group-hover:block hidden absolute w-[26%] mt-1">
          <div className="border-b-2 p-3">
            <span>Recents</span>
          </div>
          <div className="flex flex-row items-center cursor-pointer hover:bg-blue-700">
            <BsCloudSun className="text-yellow-600 w-[30px] h-[30px] ml-6" />
            <div className="p-2 ">
              <span>26°</span>
            </div>
            <div className="p-4 flex flex-col items-center text-xs">
              <p>Wayanadu</p>
              <span>Kerala</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
