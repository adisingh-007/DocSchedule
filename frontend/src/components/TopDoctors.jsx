import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
const TopDoctors = () => {

    const navigate = useNavigate()

    const { doctors } = useContext(AppContext)

    return (
        <div className='flex flex-col items-center gap-6 my-16 text-gray-800 md:mx-10'>
            <h1 className='text-3xl font-bold text-primary'>शीर्ष डॉक्टर</h1>
            <h2 className='text-xl font-medium text-gray-700'>Top Doctors to Book</h2>
            <p className='sm:w-1/2 text-center text-gray-600 leading-relaxed'>भारत के अनुभवी और विश्वसनीय डॉक्टरों से मिलें।</p>
            <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
                {doctors.slice(0, 10).map((item, index) => (
                    <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} className='border border-orange-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 shadow-md hover:shadow-lg bg-white' key={index}>
                        <img className='bg-gradient-to-b from-warm to-orange-100' src={item.image} alt="" />
                        <div className='p-4'>
                            <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : "text-gray-500"}`}>
                                <p className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-600' : "bg-gray-500"}`}></p><p className='font-medium'>{item.available ? 'उपलब्ध' : "अनुपलब्ध"}</p>
                            </div>
                            <p className='text-gray-800 text-lg font-semibold mt-2'>{item.name}</p>
                            <p className='text-gray-600 text-sm'>{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={() => { navigate('/doctors'); scrollTo(0, 0) }} className='bg-primary text-white px-12 py-3 rounded-full mt-10 hover:bg-secondary transition-all duration-300 font-semibold shadow-md'>और देखें</button>
        </div>

    )
}

export default TopDoctors