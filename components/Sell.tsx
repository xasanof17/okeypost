import React from 'react'
import { sell } from '../data'
import Slider from "react-slick";
import Image from 'next/image';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

const Sell = () => {
    const settings = {
        dots: false,
        infinite: true,
        focusOnSelect: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        initialSlide: 0,
        speed: 400,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: false,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className="my-[80px] sm:my-[100px] md:my-[160px]">
            <div className="container">
                <div className="content">
                    <div className="max-w-[477px] w-full mb-8">
                        <h2 className="text-lg sm:text-xl lg:text-xxl font-bold text-primary w-full">Насколько выгодно покупать?</h2>
                    </div>
                    <div className="mb-14">
                        <div className="relative">
                            <BsArrowLeft fontSize={25} className="absolute whatsapp top-[38%] z-10 left-6 pointer-events-none" />
                            <Slider {...settings} className="bg-white shadow-gray rounded-sm px-[70px] relative">
                                {sell.map(({ id, img, text }) => (
                                    <div className='p-5 inner items-center justify-center hover:cursor-pointer hover:bg-lightWhite' key={id}>
                                        <div className='inline-block mr-4 w-[52px] h-[52px]'>
                                            <Image src={img} alt={text} className='w-full h-full'/>
                                        </div>
                                        <p className='font-bold text-sm text-primary my-auto'>{text}</p>
                                    </div>
                                ))}
                            </Slider>
                            <BsArrowRight fontSize={25} className="absolute whatsapp top-[38%] z-10 right-6 pointer-events-none" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sell
