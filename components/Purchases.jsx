import React from 'react'
import { Button } from '../ui-components'
import { images } from '../constants'
import Image from 'next/image'

const cards = [
    { id: 1, img: images.card1, title: 'вы ВЫБИРАЕТЕ ТОВАР', txt: 'в английском магазине, оплачиваете и указываете адрес склада OkeyPost' },
    { id: 2, img: images.card2, title: 'ПОКУПКИ ПРИХОДЯТ НА СКЛАД', txt: 'и появляются в вашем личном кабинете на нашем сайте' },
    { id: 3, img: images.card3, title: 'ОТПРАВЛЯЕМ ИХ К ВАМ ДОМОЙ', txt: 'в надежной упаковке, по выгодной цене и очень быстро' },
    { id: 4, img: images.card4, title: 'ЗАБИРАЕТЕ свою ПОСЫЛКУ', txt: 'в пункте выдачи, на почте или с курьером' },
]

const Purchases = () => {
    return (
        <section className='mb-[150px]'>
            <div className="container">
                <div className="flex flex-col">
                    <div className="flex justify-start items-center">
                        <h2 className="text-primary font-extrabold text-[25px] sm:text-[35px] lg:text-[45px] leading-[56px] max-w-[700px] w-full">4 простых шага для ваших покупок в Великобритании</h2>
                    </div>
                    <div className="flex flex-col mt-15">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            {cards.map((card) => (
                                <div className="flex flex-col items-center justify-center" key={card.id}>
                                    <div className="flex items-center justify-center">
                                        <div className="flex items-center justify-center">
                                            <Image src={card.img} alt={card.title} />
                                        </div>
                                    </div>
                                    <div className="flex items-start flex-col justify-center">
                                        <h3 className="font-bold text-primary text-md leading-[24px] text-center sm:text-start uppercase md:max-w-[160px] w-full mb-2">{card.title}</h3>
                                        <p className="font-light text-center sm:text-start text-primary text-[16px] leading-[30px] max-w-[300px] w-full">{card.txt}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col mt-[50px]">
                            <p className="font-light text-center sm:text-start text-primary text-[18px] sm:text-[20px] leading-7 sm:leading-9 max-w-[760px] w-full">Не хотите разбираться самостоятельно, наши мастера шопинга с радостью купят все товары за вас.</p>
                            <div className="flex items-center justify-center sm:justify-start mt-[30px]">
                                <Button y={`py-15`} x={`px-6`} size={`text-md`} lineheight={`leading-[18px]`} text='Быстрая покупка' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Purchases
