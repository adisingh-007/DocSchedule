import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [state, setState] = useState('Sign Up')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const { backendUrl, token, setToken } = useContext(AppContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (state === 'Sign Up') {

      const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password })

      if (data.success) {
        localStorage.setItem('token', data.token)
        setToken(data.token)
      } else {
        toast.error(data.message)
      }

    } else {

      const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })

      if (data.success) {
        localStorage.setItem('token', data.token)
        setToken(data.token)
      } else {
        toast.error(data.message)
      }

    }

  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center bg-warm/20 p-6 rounded-lg'>
      <div className='flex flex-col gap-4 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border-2 border-orange-200 rounded-xl text-gray-700 text-sm shadow-lg bg-white'>
        <p className='text-3xl font-bold text-primary'>{state === 'Sign Up' ? 'खाता बनाएं' : 'लॉगिन करें'}</p>
        <p className='text-gray-600'>{state === 'Sign Up' ? 'अपॉइंटमेंट बुक करने के लिए साइन अप करें' : 'अपॉइंटमेंट बुक करने के लिए लॉगिन करें'}</p>
        {state === 'Sign Up'
          ? <div className='w-full '>
            <p className='font-semibold text-gray-700'>पूरा नाम</p>
            <input onChange={(e) => setName(e.target.value)} value={name} className='border-2 border-orange-200 rounded-lg w-full p-3 mt-1 focus:border-primary focus:outline-none' type="text" required />
          </div>
          : null
        }
        <div className='w-full '>
          <p className='font-semibold text-gray-700'>ईमेल</p>
          <input onChange={(e) => setEmail(e.target.value)} value={email} className='border-2 border-orange-200 rounded-lg w-full p-3 mt-1 focus:border-primary focus:outline-none' type="email" required />
        </div>
        <div className='w-full '>
          <p className='font-semibold text-gray-700'>पासवर्ड</p>
          <input onChange={(e) => setPassword(e.target.value)} value={password} className='border-2 border-orange-200 rounded-lg w-full p-3 mt-1 focus:border-primary focus:outline-none' type="password" required />
        </div>
        <button className='bg-primary text-white w-full py-3 my-2 rounded-lg text-base font-semibold hover:bg-secondary transition-colors shadow-md'>{state === 'Sign Up' ? 'खाता बनाएं' : 'लॉगिन करें'}</button>
        {state === 'Sign Up'
          ? <p className='text-gray-600'>पहले से खाता है? <span onClick={() => setState('Login')} className='text-primary underline cursor-pointer font-semibold'>यहाँ लॉगिन करें</span></p>
          : <p className='text-gray-600'>नया खाता बनाएं? <span onClick={() => setState('Sign Up')} className='text-primary underline cursor-pointer font-semibold'>यहाँ क्लिक करें</span></p>
        }
      </div>
    </form>
  )
}

export default Login