import React from 'react'
import { images } from '../constants'
import Image from 'next/image'

const cards = [
    { id: 1, img: images.moneydate, title: 'Больше не значит дороже', txt: 'С ростом веса посылки цена за каждые 0.5 кг уменьшается в прогрессии.' },
    { id: 2, img: images.clock, title: 'Быстрая обработка посылок', txt: 'Посылка обрабатывается не дольше 48 часов после поступления на склад.' },
    { id: 3, img: images.sms, title: 'SMS-уведомления', txt: 'Отслеживайте весь процесс с помощью sms-уведомлений.' },
]

const SatisfiedCustomers = () => {
    return (
        <section className='mt-[150px]'>
            <div className="container">
                <div className="flex flex-col">
                    <div className="flex flex-col items-start justify-center">
                        <h2 className="text-primary font-extrabold text-[25px] md:text-[35px] lg:text-[44px] leading-[40px] sm:leading-[56px] max-w-[834px] w-full mb-5">120 000 довольных клиентов в России уже сделали свой выбор</h2>
                        <p className="text-primary font-light text-[18px] md:text-[20px] leading-6 sm:leading-9 max-w-[600px] w-full">За последний год десятки тысяч наших клиентов заказали товары из Англии и оставили 19 633 отзыва</p>
                    </div>
                    <div className="mb-[80px] mt-[40px] sm:mt-[80px]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {cards.map((card) => (
                                <div className='flex items-center justify-start' key={card.id}>
                                    <div className="flex flex-col p-[25px] lg:p-[35px] pb-[40px] lg:pb-[50px] rounded-sm shadow-white bg-white w-full">
                                        <div className="flex items-center justify-start mb-[30px]">
                                            <div className="flex items-center justify-center max-w-[50px] w-full">
                                                <Image src={card.img} alt={card.id} className="w-full h-full"/>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-start justify-center">
                                            <h3 className='text-primary font-bold text-md lg:text-lg mb-2'>{card.title}</h3>
                                            <p className='text-primary font-light text-[14px] lg:text-sm max-w-[320px] w-full'>{card.txt}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SatisfiedCustomers
