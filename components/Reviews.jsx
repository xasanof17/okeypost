import React from 'react'
import { images } from '../constants'
import { Button } from '../ui-components'
import Image from 'next/image'

const comments = [
    { id: 1, img: images.review1, name: 'NIKOLAY S', stars: images.stars, txt: 'Ваша доставка самая быстрая и дешёвая!!!', date: '16 Ноября 2021', city: 'Санкт-Петербург' },
    { id: 2, img: images.review2, name: 'DMITRIY D', stars: images.stars, txt: 'Пуховик Levi’s c eBay. Всё приехало быстро и целым.', date: '16 Ноября 2021', city: 'Москва' },
    { id: 3, img: images.review3, name: 'VLADIMIR E', stars: images.stars, txt: 'Огонь, как всегда! Отдельное спасибо за доп.упаковку, часики от Apple пришли в простом бумажном пакете )', date: '16 Ноября 2021', city: 'Санкт-Петербург' },
    { id: 4, img: images.review4, name: 'Оксана', stars: images.stars, txt: 'Очень быстро, надежно! Как всегда большое спасибо за работу!', date: '16 Ноября 2021', city: 'Odintsovo' },
]

const Reviews = () => {
    return (
        <section className='mb-[150px]'>
            <div className="container">
                <div className="flex flex-col">
                    <div className="flex items-center justify-start">
                        <h2 className="font-extrabold text-primary text-lg sm:text-[36px] leading-[56px] mb-[40px]">Отзывы и цитаты блогеров:</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-[30px]">
                        {comments.map((comment) => (
                            <div className='bg-white shadow-white rounded-sm p-5 sm:p-4 lg:p-3 flex items-center justify-center' key={comment.id}>
                                <div className="flex items-center flex-col md:flex-row md:justify-between">
                                    <div className="flex items-center justify-center mr-0 md:mr-[40px]">
                                        <div className="flex items-center justify-center max-w-[440px] md:max-w-[240px] w-full">
                                            <Image src={comment.img} alt={comment.name} className='w-full h-full' />
                                        </div>
                                    </div>
                                    <div className="flex flex-col mt-4 md:mt-0 md:h-[170px] lg:h-[180px] w-3/4">
                                        <div className="flex items-start justify-center flex-col">
                                            <h3 className="font-bold text-primary text-18px leading-5 mb-2">{comment.name}</h3>
                                            <div className="flex items-center max-w-[90px] w-full">
                                                <Image src={comment.stars} alt='' className="w-full h-full" />
                                            </div>
                                            <p className="font-light text-primary text-[16px] leading-[26px] max-w-[359px] w-full mt-15 ">{comment.txt}</p>
                                        </div>
                                        <div className="flex items-start justify-center flex-col mt-3 md:mt-0 ">
                                            <div className="flex items-center">
                                                <span className='text-primary font-bold text-base leading-7'>Дата:</span>
                                                <p className='text-base text-primary font-light ml-[15px] leading-6'>{comment.date}</p>
                                            </div>
                                            <div className="flex items-center">
                                                <span className='text-primary font-bold text-base leading-7'>Город:</span>
                                                <p className='text-base text-primary font-light ml-[15px] leading-6'>{comment.city}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-center sm:justify-start mt-[40px]">
                        <Button text={`Все отзывы`}
                            y={`py-[25px]`} x={`px-[60px]`} size={`text-md`} lineheight={`leading-[18px]`} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reviews
