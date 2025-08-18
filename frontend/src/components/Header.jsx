import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-gradient-to-r from-saffron to-primary rounded-lg px-6 md:px-10 lg:px-20 shadow-lg border border-orange-200'>

            {/* --------- Header Left --------- */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
                <p className='text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight md:leading-tight lg:leading-tight'>
                    स्वास्थ्य सेवा <br /> विश्वसनीय डॉक्टरों के साथ
                </p>
                <p className='text-lg md:text-xl text-white font-medium opacity-90'>
                    Book Appointments with Trusted Doctors
                </p>
                <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
                    <img className='w-28' src={assets.group_profiles} alt="" />
                    <p>भारत के सर्वश्रेष्ठ डॉक्टरों से मिलें। <br className='hidden sm:block' /> आसानी से अपॉइंटमेंट बुक करें।</p>
                </div>
                <a href='#speciality' className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-primary text-sm font-semibold m-auto md:m-0 hover:scale-105 transition-all duration-300 shadow-md'>
                    अपॉइंटमेंट बुक करें <img className='w-3' src={assets.arrow_icon} alt="" />
                </a>
            </div>

            {/* --------- Header Right --------- */}
            <div className='md:w-1/2 relative'>
                <img className='w-full md:absolute bottom-0 h-auto rounded-lg opacity-95' src={assets.header_img} alt="" />
            </div>
        </div>
    )
}

export default Header