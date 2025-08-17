import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className='bg-warm/20 p-6 rounded-lg'>

      <div className='text-center text-3xl pt-10 text-primary'>
        <p className='font-bold'>संपर्क <span className='text-secondary'>करें</span></p>
        <p className='text-xl text-gray-600 mt-2'>CONTACT US</p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm bg-white p-8 rounded-lg shadow-md'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-bold text-xl text-primary'>हमारा कार्यालय</p>
          <p className='text-gray-700 leading-relaxed'>सर्वे नं. 140 - 141/1 <br /> भारतीय सूचना प्रौद्योगिकी संस्थान, नागपुर (IIITN)</p>
          <p className='text-gray-700'>📞 दूरभाष: +91 8468938745 <br /> ✉️ ईमेल: info@prescripto.com</p>
          <p className='font-bold text-xl text-primary'>प्रेस्क्रिप्टो में करियर</p>
          <p className='text-gray-700 leading-relaxed'>हमारी टीम और नौकरी के अवसरों के बारे में और जानें।</p>
          <button className='border-2 border-primary px-8 py-4 text-sm hover:bg-primary hover:text-white transition-all duration-500 font-semibold text-primary rounded-lg shadow-md'>नौकरियां देखें</button>
        </div>
      </div>

    </div>
  )
}

export default Contact
