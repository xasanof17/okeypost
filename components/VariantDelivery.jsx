import React from 'react'
import { images } from '../constants';
import DeliveryCard from './DeliveryCard';

const cards = [
    { id: 1, img: images.postoffice, title: 'Почта России', deadlines: '10-14 дней', costdelivery: 'от £27.00', total: '£41.99' },
    { id: 2, img: images.ems, title: 'EMS ПОЧТА РОССИЯ', deadlines: '10-14 дней', costdelivery: 'от £27.00', total: '£41.99' },
    { id: 3, img: images.postsmall, title: 'ПОЧТА РОССИИ МЕЛКИЕ ПАКЕТЫ', deadlines: '10-14 дней', costdelivery: 'от £27.00', total: '£41.99' },
];

const VariantDelivery = () => {
    return (
        <section className="mb-[170px]">
            <div className="container">
                <div className="flex flex-col">
                    <div className="flex justify-start">
                        <h2 className='text-primary font-extrabold text-[20px] md:text-[30px] lg:text-[36px] md:leading-[45px] lg:leading-[56px] mb-7 lg:mb-8'>Варианты доставки:</h2>
                    </div>
                    {/* Cards... */}
                    {cards.map((card) => (
                        <DeliveryCard key={card.id} img={card.img} title={card.title} deadlines={card.deadlines} costdelivery={card.costdelivery} total={card.total}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default VariantDelivery
