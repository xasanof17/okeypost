import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { images } from '../constants'
import { footerlinks } from '../data'
import { SiWhatsapp, SiViber } from 'react-icons/si'
import { BiMessageDetail } from 'react-icons/bi'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className='flex flex-col'>
                        <Link href={'/'}>
                            <a className='flex items-center justify-center h-12 w-[190px]'>
                                <Image src={images.logo} alt='logo' className='w-full h-full' />
                            </a>
                        </Link>
                        <div className='flex items-center my-8'>
                            <a href='#!' className="mr-1 p-3 border-2 border-green rounded-full hover:scale-75 duration-300"><SiWhatsapp className="whatsapp" fontSize={27} /></a>
                            <a href='#!' className="mr-1 p-3 border-2 border-violet rounded-full hover:scale-75 duration-300"><SiViber className="viber" fontSize={27} /></a>
                            <a href='#!' className="mr-1 p-3 border-2 border-blue rounded-full hover:scale-75 duration-300"><BiMessageDetail className="messenger" fontSize={27} /></a>
                        </div>
                    </div>
                    {footerlinks.map((footerlinks) => (
                        <div className="flex flex-col items-start" key={footerlinks.id}>
                            <h3 className='font-bold text-base text-primary mb-4'>{footerlinks.title}</h3>
                            <ul className='flex flex-col'>
                                {footerlinks.links.map(({ id, name, href }) => (
                                    <li key={id}>
                                        <Link href={href}>
                                            <a className='text-base font-light text-primary hover:text-green duration-200 py-2 inline-block'>
                                                {name}
                                            </a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center py-8 border-t-2 border-gray">
                    <p className="font-light text-base text-primary text-center">
                        &copy;2022 Okeypost. Все права защищены. Maked by <span className="text-green">Bandit</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
