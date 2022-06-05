import React from 'react'
import Carddata from "../Carddata";

export default function SmallCard() {
  return (
    <>
    <div className="bg-white rounded-lg mt-2  w-[53%] ml-[12.5%]">
        <div className='grid grid-cols-4 gap-12 p-5'>
        {Carddata.cardData.map((item) => {
            return (
              (
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
    </div>
    </>
  )
}
