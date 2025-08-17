import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
    return (
        <div id='speciality' className='flex flex-col items-center gap-6 py-16 text-gray-800 bg-warm/30'>
            <h1 className='text-3xl font-bold text-primary'>विशेषज्ञता के अनुसार खोजें</h1>
            <h2 className='text-xl font-medium text-gray-700'>Find by Speciality</h2>
            <p className='sm:w-1/2 text-center text-gray-600 leading-relaxed'>भारत के सर्वश्रेष्ठ डॉक्टरों की सूची देखें और आसानी से अपॉइंटमेंट बुक करें।</p>
            <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll '>
                {specialityData.map((item, index) => (
                    <Link to={`/doctors/${item.speciality}`} onClick={() => scrollTo(0, 0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500 bg-white p-4 rounded-lg shadow-md hover:shadow-lg' key={index}>
                        <img className='w-16 sm:w-20 mb-3 filter brightness-110' src={item.image} alt="" />
                        <p className='font-medium text-gray-700'>{item.speciality}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SpecialityMenu