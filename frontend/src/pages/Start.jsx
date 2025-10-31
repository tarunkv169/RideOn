import React from 'react'
import { Link } from 'react-router-dom'
import rideon from '../assets/photos/rideon.png'    

const Start = () => {
  return (
    <div className="relative h-screen bg-cover bg-center bg-[url('https://www.verifiedmarketreports.com/images/blogs/07-24/top-7-trends-in-ride-hailing.jpg')]">

      <img
        src={rideon}
        alt="RideOn logo"
        className="absolute top-6 left-6 w-28 bg-sky-300 rounded-tl-lg rounded-br-lg p-2 shadow-md"
      />

     
      <div className="absolute left-10 top-1/2 transform -translate-y-1/2 max-w-lg w-full">
      
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-10 min-h-[22rem] md:min-h-[30rem] flex flex-col">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Get Started with RideOn</h2>
          <p className="text-gray-700 mb-6">
            Book rides, join fleets and move smarter — fast, safe and reliable. Create an account to begin.
          </p>

         
          <div className="flex-1 flex items-center justify-center">
            <div className="bg-sky-300 p-6 md:p-8 rounded-full shadow-md">
      
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 md:h-20 md:w-20" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M5 11V7a2 2 0 0 1 2-2h.5l1-2h5l1 2H17a2 2 0 0 1 2 2v4h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H6v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1zm2 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm10 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM6 9h12V7H6v2z"/>
              </svg>
            </div>
          </div>

          <div className="mt-auto">
            <Link
              to="/login"
              className="inline-flex items-center justify-between w-full px-8 py-4 bg-sky-400 hover:bg-sky-500 text-black font-semibold rounded-lg shadow-md transition text-lg"
            >
              <span>Continue</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Start