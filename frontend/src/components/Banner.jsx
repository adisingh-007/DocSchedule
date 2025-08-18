import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate()

    return (
        <div className='flex bg-gradient-to-r from-indianGreen to-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 shadow-lg border border-green-200'>

            {/* ------- Left Side ------- */}
            <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
                <div className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white'>
                    <p>अपॉइंटमेंट बुक करें</p>
                    <p className='mt-4'>100+ विश्वसनीय डॉक्टरों के साथ</p>
                </div>
                <p className='text-white/90 mt-4 text-sm sm:text-base'>Book Appointment with 100+ Trusted Doctors</p>
                <button onClick={() => { navigate('/login'); scrollTo(0, 0) }} className='bg-white text-sm sm:text-base text-primary font-semibold px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all shadow-md'>खाता बनाएं</button>
            </div>

            {/* ------- Right Side ------- */}
            <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
                <img className='w-full absolute bottom-0 right-0 max-w-md opacity-95' src={assets.appointment_img} alt="" />
            </div>
        </div>
    )
}

export default Banner