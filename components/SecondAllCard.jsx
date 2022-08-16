import React from 'react'
import { SiWhatsapp, SiViber } from 'react-icons/si'
import { BiMessageDetail } from 'react-icons/bi'

const SecondAllCard = () => {
  return (
    <div className='max-w-[1400px] xl:max-w-[1800px] w-full mx-auto bg-linearBlue rounded-lg'>
       <div className="py-[40px] sm:py-[60px] lg:py-[100px]">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-9 flex items-center justify-start">
                <h2 className='text-white text-center sm:text-start font-extrabold text-[22px] md:text-[30px] lg:text-[44px] leading-7 sm:leading-5 md:leading-9 lg:leading-[56px]'>Остались вопросы? Спросите нас в соцсетях!</h2>
            </div>
            <div className="col-12 col-md-3 flex items-center justify-center sm:justify-end">
              <div className="flex items-center justify-center mt-4 sm:mt-0">
                <a href='#!' className="mr-1 p-3 border-2 border-white rounded-full hover:scale-75 duration-300"><SiWhatsapp className="text-white" fontSize={28} /></a>
                <a href='#!' className="mr-1 p-3 border-2 border-white rounded-full hover:scale-75 duration-300"><SiViber className="text-white" fontSize={28} /></a>
                <a href='#!' className="mr-1 p-3 border-2 border-white rounded-full hover:scale-75 duration-300"><BiMessageDetail className="text-white" fontSize={28} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}   

export default SecondAllCard
