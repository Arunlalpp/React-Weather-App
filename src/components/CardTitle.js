import React from "react";
import data from "../data";
import { useState } from "react";

export default function CardTitle() {
  const [showMoreButton, setShowMoreButton] = useState(data.data.length > 4);

  const loadMoreData = (
    <>
      <div className="grid grid-cols-4 gap-12 mt-8">
        {data.data.map((item, i) => {
          return (
            i > 4 && (
              <>
                <div className="">
                  <div>
                    <img className="rounded-lg h-[15vh]"src={item.image} />
                  </div>
                  <div className="mt-3">
                    <p className="text-[14px]">{item.title}</p>
                  </div>
                </div>
              </>
            )
          );
        })}
      </div>
      {!showMoreButton && (
        <button
          className=" inline-block mt-6 rounded-full px-6 py-2.5 bg-[#1B4DE4] text-white font-medium text-xs leading-tight  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={() => {
            setShowMoreButton(true);
          }}
        >
          Show Less
        </button>
      )}
    </>
  );

  return (
    <div className="bg-white w-[53%] ml-[12.5%]">
      <div className="p-4">
        <div className="grid grid-cols-4 gap-12">
          {data.data.map((item, i) => {
            return (
              i < 4 && (
                <>
                  <div>
                    <div>
                      <img className="rounded-lg h-[15vh]" src={item.image} />
                    </div>
                    <div className="mt-3">
                      <p>{item.title}</p>
                    </div>
                  </div>
                </>
              )
            );
          })}
        </div>
        {showMoreButton && (
          <button
            className=" inline-block mt-6 rounded-full px-6 py-2.5 bg-[#1B4DE4] text-white font-medium text-xs leading-tight  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={() => {
              setShowMoreButton(false);
            }}
          >
            Show More
          </button>
        )}
        {!showMoreButton && data.data.length > 4 && loadMoreData}
      </div>
    </div>
  );
}