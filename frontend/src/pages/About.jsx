import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='bg-cream/20 p-6 rounded-lg border border-orange-200'>

      <div className='text-center text-3xl pt-10 text-primary'>
        <p className='font-bold'>हमारे <span className='text-secondary'>बारे में</span></p>
        <p className='text-xl text-gray-600 mt-2'>ABOUT US</p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12 bg-white p-8 rounded-lg shadow-md border border-orange-100'>
        <img className='w-full md:max-w-[360px] rounded-lg' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-700'>
          <p className='leading-relaxed'>प्रेस्क्रिप्टो में आपका स्वागत है - भारत का विश्वसनीय स्वास्थ्य सेवा प्लेटफॉर्म। हम समझते हैं कि डॉक्टर से अपॉइंटमेंट लेना और स्वास्थ्य रिकॉर्ड का प्रबंधन करना कितना चुनौतीपूर्ण हो सकता है।</p>
          <p className='leading-relaxed'>हमारा मिशन है भारत में स्वास्थ्य सेवा को सुलभ और आसान बनाना। हम आधुनिक तकनीक के साथ पारंपरिक भारतीय चिकित्सा पद्धति को जोड़कर एक बेहतर स्वास्थ्य सेवा प्रदान करते हैं।</p>
          <b className='text-primary text-lg'>हमारा दृष्टिकोण</b>
          <p className='leading-relaxed'>हमारा लक्ष्य है हर भारतीय को गुणवत्तापूर्ण स्वास्थ्य सेवा प्रदान करना। हम मरीजों और डॉक्टरों के बीच की दूरी को कम करके एक बेहतर स्वास्थ्य व्यवस्था का निर्माण कर रहे हैं।</p>
        </div>
      </div>

      <div className='text-2xl my-8 text-center'>
        <p className='text-primary font-bold'>हमें क्यों <span className='text-secondary'>चुनें</span></p>
        <p className='text-lg text-gray-600 mt-2'>WHY CHOOSE US</p>
      </div>

      <div className='flex flex-col md:flex-row mb-20 gap-4'>
        <div className='border-2 border-orange-200 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-700 cursor-pointer bg-white shadow-md rounded-lg'>
          <b className='text-lg text-primary hover:text-white'>दक्षता:</b>
          <p className='leading-relaxed'>आपकी व्यस्त जीवनशैली के अनुकूल सरल अपॉइंटमेंट बुकिंग प्रक्रिया।</p>
        </div>
        <div className='border-2 border-orange-200 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-secondary hover:text-white transition-all duration-300 text-gray-700 cursor-pointer bg-white shadow-md rounded-lg'>
          <b className='text-lg text-secondary hover:text-white'>सुविधा:</b>
          <p className='leading-relaxed'>आपके क्षेत्र के विश्वसनीय स्वास्थ्य पेशेवरों का व्यापक नेटवर्क।</p>
        </div>
        <div className='border-2 border-orange-200 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-indianGreen hover:text-white transition-all duration-300 text-gray-700 cursor-pointer bg-white shadow-md rounded-lg'>
          <b className='text-lg text-indianGreen hover:text-white'>व्यक्तिगतकरण:</b>
          <p className='leading-relaxed'>आपके स्वास्थ्य को बेहतर बनाने के लिए व्यक्तिगत सुझाव और रिमाइंडर।</p>
        </div>
      </div>

    </div>
  )
}

export default About