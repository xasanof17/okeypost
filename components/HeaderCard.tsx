import React from 'react'
import Image from 'next/image'
import { Button } from '../ui-components'
import { images } from '../constants'

const HeaderCard = () => {
    return (
        <section className="max-w-[1400px] xl:max-w-[1800px] w-full mx-auto bg-linearBlue rounded-lg">
            <div className="container">
                <div className="py-14 mt-5 lg:mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="flex flex-col mb-5 md:mb-auto my-auto">
                            <h1 className="text-center xs:text-start text-2xl xs:text-3xl sm:text-5xl lg:text-6xl leading-8 lg:leading-[80px] text-white font-bold mb-2">Доставка товаров из Великобритании в Россию</h1>
                            <p className="text-center xs:text-start text-md lg:text-xl leading-7 xs:leading-8 md:leading-10 font-light text-white">Начните экономить до 80% на шопинге. Регистрируйтесь в OkeyPost, чтобы покупать со скидками в UK одежду, обувь, гаджеты известных брендов и безопасно отправлять вещи в Россию.
                            </p>
                            <div className="mt-5 mb-2 md:mt-7 lg:mt-9 sm:mb-0 flex items-center justify-center xs:block">
                                <Button y={`py-[20px]`} x={`px-[45px]`} size={`text-md`} lineheight={`leading-[18px]`} text='Получить адрес в UK' />
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="flex items-start sm:items-center justify-center md:w-[550px] md:h-[550px] lg:w-[585px] lg:h-[585px]">
                                <Image src={images.illustration} alt='illustration' className='w-full h-full' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderCard
