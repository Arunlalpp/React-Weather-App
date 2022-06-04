import React from "react";
import { VscSearch } from "react-icons/vsc";

export default function Searchbar() {
  return (
    <div class="flex">
      <div class="mb-3 xl:w-96">
        <div class="input-group relative flex items-stretch w-full">
          <input
            type="search"
            class="relative flex-auto focus:outline-2 outline-white text-center min-w-0 block w-full px-3 py-1.5 text-base font-normal text-white bg-[#337A9E] rounded-3xl m-0"
            placeholder="search City or Postcode"
          />
          <div className="absolute text-white f left-[92%] top-[28%]">
            <VscSearch />
          </div>
        </div>
      </div>
    </div>
  );
}
