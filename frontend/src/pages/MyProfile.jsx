import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const MyProfile = () => {

    const [isEdit, setIsEdit] = useState(false)

    const [image, setImage] = useState(false)

    const { token, backendUrl, userData, setUserData, loadUserProfileData } = useContext(AppContext)

    // Function to update user profile data using API
    const updateUserProfileData = async () => {

        try {

            const formData = new FormData();

            formData.append('name', userData.name)
            formData.append('phone', userData.phone)
            formData.append('address', JSON.stringify(userData.address))
            formData.append('gender', userData.gender)
            formData.append('dob', userData.dob)

            image && formData.append('image', image)

            const { data } = await axios.post(backendUrl + '/api/user/update-profile', formData, { headers: { token } })

            if (data.success) {
                toast.success(data.message)
                await loadUserProfileData()
                setIsEdit(false)
                setImage(false)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }

    }

    return userData ? (
        <div className='max-w-lg flex flex-col gap-2 text-sm pt-5 bg-cream/20 p-6 rounded-lg border border-orange-200'>
            <h2 className='text-2xl font-bold text-primary mb-4'>मेरी प्रोफाइल | My Profile</h2>

            {isEdit
                ? <label htmlFor='image' >
                    <div className='inline-block relative cursor-pointer'>
                        <img className='w-36 rounded-lg opacity-75 border-2 border-orange-200' src={image ? URL.createObjectURL(image) : userData.image} alt="" />
                        <img className='w-10 absolute bottom-12 right-12' src={image ? '' : assets.upload_icon} alt="" />
                    </div>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden />
                </label>
                : <img className='w-36 rounded-lg border-2 border-orange-200' src={userData.image} alt="" />
            }

            {isEdit
                ? <input className='bg-white border-2 border-orange-200 rounded-lg text-3xl font-medium max-w-60 p-2' type="text" onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))} value={userData.name} />
                : <p className='font-bold text-3xl text-primary mt-4'>{userData.name}</p>
            }

            <hr className='bg-orange-200 h-[2px] border-none' />

            <div>
                <p className='text-primary font-bold underline mt-3'>संपर्क जानकारी | CONTACT INFORMATION</p>
                <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-[#363636]'>
                    <p className='font-bold text-gray-700'>Email id:</p>
                    <p className='text-primary font-medium'>{userData.email}</p>
                    <p className='font-bold text-gray-700'>Phone:</p>

                    {isEdit
                        ? <input className='bg-white border-2 border-orange-200 rounded-lg max-w-52 p-2' type="text" onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))} value={userData.phone} />
                        : <p className='text-primary font-medium'>{userData.phone}</p>
                    }

                    <p className='font-bold text-gray-700'>Address:</p>

                    {isEdit
                        ? <p>
                            <input className='bg-white border-2 border-orange-200 rounded-lg p-2 mb-2 w-full' type="text" onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={userData.address.line1} />
                            <br />
                            <input className='bg-white border-2 border-orange-200 rounded-lg p-2 w-full' type="text" onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={userData.address.line2} /></p>
                        : <p className='text-gray-500'>{userData.address.line1} <br /> {userData.address.line2}</p>
                    }

                </div>
            </div>
            <div>
                <p className='text-primary font-bold underline mt-3'>मूलभूत जानकारी | BASIC INFORMATION</p>
                <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-gray-600'>
                    <p className='font-bold text-gray-700'>Gender:</p>

                    {isEdit
                        ? <select className='max-w-32 bg-white border-2 border-orange-200 rounded-lg p-2' onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender} >
                            <option value="Not Selected">Not Selected</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        : <p className='text-gray-500'>{userData.gender}</p>
                    }

                    <p className='font-bold text-gray-700'>Birthday:</p>

                    {isEdit
                        ? <input className='max-w-40 bg-white border-2 border-orange-200 rounded-lg p-2' type='date' onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob} />
                        : <p className='text-gray-500'>{userData.dob}</p>
                    }

                </div>
            </div>
            <div className='mt-10'>

                {isEdit
                    ? <button onClick={updateUserProfileData} className='border-2 border-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-all font-semibold shadow-md'>Save information</button>
                    : <button onClick={() => setIsEdit(true)} className='border-2 border-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-all font-semibold shadow-md'>Edit</button>
                }

            </div>
        </div>
    ) : null
}

export default MyProfile