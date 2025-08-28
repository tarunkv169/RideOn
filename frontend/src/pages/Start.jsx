
import React from 'react'
import { Link } from 'react-router-dom'
import rideon from '../assets/photos/rideon.png'    

const Start = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(https://www.verifiedmarketreports.com/images/blogs/07-24/top-7-trends-in-ride-hailing.jpg)] h-screen pt-8 flex justify-between flex-col w-full'>
          <img
              src={rideon}
              alt="no_img"
              className="w-28 mb-10 mt-4 mx-10  bg-sky-100 rounded-tl-lg rounded-br-lg"
            />
        <div className='bg-white pb-8 py-4 px-4'>
          <h2 className='text-[30px] font-semibold'>Get Started with rideon</h2>
          <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start