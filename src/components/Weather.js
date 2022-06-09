import React from 'react'

export default function Weather() {
  return (
    
        <div className="md:hidden bg-gradient-to-b from-[#005986] violet-[#4092B0] to-[#4092B0]">
          <div className="rounded-lg w-[95%] m-auto bg-white">
              <div className="p-4">
                <span className="text-[1.5rem] font-bold">welcome.</span>
                <p className='text-base'>
                  Please enter a city or postcode to get your most accurate
                  weather forecast.
                </p>
                <button className="mb-1 inline-block mt-4 rounded-full px-4 py-2 bg-[#1B4DE4] text-white font-semibold text-sm leading-tight  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                Enter Location
              </button>
              </div>
             
          </div>
        </div>

  )
}
