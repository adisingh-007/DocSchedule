import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10 bg-gradient-to-r from-cream to-orange-50 rounded-lg p-8 mt-20 border border-orange-200'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm'>

        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-700 leading-6 font-medium'>स्वास्थ्य सेवा में भारत का अग्रणी प्लेटफॉर्म। हमारा उद्देश्य सभी को गुणवत्तापूर्ण चिकित्सा सेवा प्रदान करना है। विश्वसनीय डॉक्टरों के साथ आसान अपॉइंटमेंट बुकिंग।</p>
        </div>

        <div>
          <p className='text-xl font-bold mb-5 text-primary'>कंपनी</p>
          <ul className='flex flex-col gap-2 text-gray-700 font-medium'>
            <li className='hover:text-primary cursor-pointer'>होम</li>
            <li className='hover:text-primary cursor-pointer'>हमारे बारे में</li>
            <li className='hover:text-primary cursor-pointer'>सेवाएं</li>
            <li className='hover:text-primary cursor-pointer'>गोपनीयता नीति</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-bold mb-5 text-primary'>संपर्क करें</p>
          <ul className='flex flex-col gap-2 text-gray-700 font-medium'>
            <li>📞 +91-8468938745</li>
            <li>✉️ info@prescripto.com</li>
            <li>📍 नई दिल्ली, भारत</li>
          </ul>
        </div>

      </div>

      <div>
        <hr className='border-orange-200' />
        <p className='py-5 text-sm text-center text-gray-600 font-medium'>कॉपीराइट 2024 @ Prescripto.com - सभी अधिकार सुरक्षित।</p>
      </div>

    </div>
  )
}