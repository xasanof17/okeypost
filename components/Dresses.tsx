import React from 'react'
import Image from 'next/image'
import { sellcard } from '../data'
import { images } from '../constants'

const Dresses = () => {
    return (
        <section className="dresses">
            <div className="container">
                <div className="top">
                    {sellcard.map((card) => (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-y-0 gap-x-10 md:gap-x-16" key={card.id}>
                            {card.russian.map(({ id, about }) => (
                                <div className="flex flex-col items-center md:items-start" key={id}>
                                    <h2 className='text-primary text-center md:text-start font-bold text-lg sm:text-xl max-w-[400px] w-full mb-11'>{about}</h2>
                                    <div className="flex justify-center md:justify-start bg-white rounded-sm p-[20px] sm:p-[30px] w-full sm:w-3/4 md:w-full">
                                        <div className="flex items-center justify-center">
                                            <div className="flex items-center justify-center mr-7">
                                                <Image src={images.russianflag} className='w-full h-full' alt='img' />
                                            </div>
                                            <div className="flex flex-col">
                                                <p className='font-regular text-primary text-base'>Цена в России</p>
                                                <span className="font-bold text-xl text-primary">{card.russianCost}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="flex flex-col">
                                <div className="flex items-center justify-center relative h-full">
                                    <div className="w-full sm:w-2/3 md:w-full h-full rounded-full bg-white absolute top-0 left-auto right-auto" />
                                    <div className="flex items-center justify-center">
                                        <Image src={images.jacket} alt='img' className='w-full h-full' />
                                    </div>
                                </div>
                            </div>
                            {card.uk.map(({ id, aboutsell, cost }) => (
                                <div className="flex flex-col items-center md:items-start" key={id}>
                                    <h2 className='text-primary text-center md:text-start font-bold text-lg sm:text-xl max-w-[400px] w-full mb-11'>{aboutsell} <span className='text-green font-bold'>{cost}</span></h2>
                                    <div className="flex justify-center md:justify-start bg-white rounded-sm p-[20px] sm:p-[30px] w-full sm:w-3/4 md:w-full">
                                        <div className="flex items-center justify-center">
                                            <div className="flex items-center justify-center mr-7">
                                                <Image src={images.ukflag} className='w-full h-full' alt='img' />
                                            </div>
                                            <div className="flex flex-col">
                                                <p className='font-regular text-primary text-base'>Цена в UK</p>
                                                <span className="font-bold text-xl text-green">{card.ukCost}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Dresses
