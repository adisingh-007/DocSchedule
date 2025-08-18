import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'

const Doctors = () => {

  const { speciality } = useParams()

  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  return (
    <div className='bg-cream/20 p-6 rounded-lg border border-orange-200'>
      <p className='text-gray-700 font-semibold text-lg mb-4'>विशेषज्ञ डॉक्टरों की सूची देखें।</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button onClick={() => setShowFilter(!showFilter)} className={`py-2 px-4 border-2 border-primary rounded-lg text-sm font-semibold transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : 'text-primary'}`}>फिल्टर</button>
        <div className={`flex-col gap-4 text-sm text-gray-700 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={() => speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-4 py-3 pr-16 border-2 border-orange-200 rounded-lg transition-all cursor-pointer font-semibold hover:shadow-md ${speciality === 'General physician' ? 'bg-primary text-white' : 'bg-white hover:border-primary'}`}>General physician</p>
          <p onClick={() => speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-4 py-3 pr-16 border-2 border-orange-200 rounded-lg transition-all cursor-pointer font-semibold hover:shadow-md ${speciality === 'Gynecologist' ? 'bg-primary text-white' : 'bg-white hover:border-primary'}`}>Gynecologist</p>
          <p onClick={() => speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-4 py-3 pr-16 border-2 border-orange-200 rounded-lg transition-all cursor-pointer font-semibold hover:shadow-md ${speciality === 'Dermatologist' ? 'bg-primary text-white' : 'bg-white hover:border-primary'}`}>Dermatologist</p>
          <p onClick={() => speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-4 py-3 pr-16 border-2 border-orange-200 rounded-lg transition-all cursor-pointer font-semibold hover:shadow-md ${speciality === 'Pediatricians' ? 'bg-primary text-white' : 'bg-white hover:border-primary'}`}>Pediatricians</p>
          <p onClick={() => speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-4 py-3 pr-16 border-2 border-orange-200 rounded-lg transition-all cursor-pointer font-semibold hover:shadow-md ${speciality === 'Neurologist' ? 'bg-primary text-white' : 'bg-white hover:border-primary'}`}>Neurologist</p>
          <p onClick={() => speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-4 py-3 pr-16 border-2 border-orange-200 rounded-lg transition-all cursor-pointer font-semibold hover:shadow-md ${speciality === 'Gastroenterologist' ? 'bg-primary text-white' : 'bg-white hover:border-primary'}`}>Gastroenterologist</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {filterDoc.map((item, index) => (
            <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} className='border-2 border-orange-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 shadow-md hover:shadow-lg bg-white' key={index}>
              <img className='bg-gradient-to-b from-cream to-orange-100' src={item.image} alt="" />
              <div className='p-4'>
                <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-600' : "text-gray-500"}`}>
                  <p className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-600' : "bg-gray-500"}`}></p><p className='font-semibold'>{item.available ? 'उपलब्ध' : "अनुपलब्ध"}</p>
                </div>
                <p className='text-gray-800 text-lg font-semibold mt-2'>{item.name}</p>
                <p className='text-gray-600 text-sm'>{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Doctors