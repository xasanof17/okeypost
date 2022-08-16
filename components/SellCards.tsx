import React from 'react'
import Image from 'next/image'

import {aboutSellCard} from '../data'

const SellCards = () => {
  return (
    <section className="my-[100px] lg:my-[150px] sell-cards">
      <div className="container">
        <div className="bg-white shadow-white rounded-sm sm:py-15">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
                {aboutSellCard.map(({id, img, name}) => (                    
                    <div className="p-20 sm:px-[70px] sm:py-[50px] border-b-2 sm:border-b-0 sm:border-r-2 border-gray flex items-center sm:my-2 mx-4 sm:mx-0 lg:m-0 sellcard" key={id}>
                        <div className="flex items-center justify-center">
                            <div className="flex items-center justify-center mr-5 md:mr-2 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]">
                                <Image src={img} alt={name} className="w-full h-full"/>
                            </div>
                            <p className="text-md font-bold text-primary">{name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default SellCards
