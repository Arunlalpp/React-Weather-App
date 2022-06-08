import React from 'react'

export default function Weather() {
  return (
    
        <div className="md:hidden bg-slate-500 pt-2">
          <div className="rounded-lg w-[95%] m-auto bg-white">
              <div className="p-4 ">
                <span className="text-2xl font-bold">welcome</span>
                <p className='text-sm'>
                  Please enter a city or postcode to get your most accurate
                  weather forecast.
                </p>
              </div>
              <button className="ml-4 mb-4 inline-block mt-0 rounded-full px-4 py-2 bg-[#1B4DE4] text-white font-medium text-xs leading-tight  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                Enter Location
              </button>
          </div>
        </div>

  )
}
