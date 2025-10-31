import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CaptainDataContext } from '../context/CapatainContext'
import rideon from '../assets/photos/rideon.png'

const Captainlogin = () => {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const { captain, setCaptain } = React.useContext(CaptainDataContext)
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();
    const captain = {
      email: email,
      password
    }

    // @ts-ignore
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain)

    if (response.status === 200) {
      const data = response.data

      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')
    }

    setEmail('')
    setPassword('')
  }

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
    
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <div>
          <img
            src={rideon}
            alt="no_img"
            className="w-28 mb-6 mx-auto bg-sky-100 rounded-tl-lg rounded-br-lg"
          />

          <form onSubmit={(e) => { submitHandler(e) }}>
            <h3 className='text-lg font-medium mb-4 text-center'>Captain Sign in</h3>

            <div className='mb-4'>
              <h3 className='text-lg font-medium mb-2'>What's your email</h3>
              <input
                required
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
                className='bg-[#eeeeee] mb-4 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
                type="email"
                placeholder='email@example.com'
              />
            </div>

            <div className='mb-4'>
              <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
              <input
                className='bg-[#eeeeee] mb-4 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}
                required type="password"
                placeholder='password'
              />
            </div>

            <button
              className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg'
            >Login</button>
          </form>

          <p className='text-center mt-3'>Join a fleet? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
        </div>

        <div className='mt-6'>
          <Link
            to='/login'
            className='bg-[#d5622d] block text-center text-white font-semibold rounded-lg px-4 py-2 w-full'
          >Sign in as User</Link>
        </div>
      </div>
    </div>
  )
}

export default Captainlogin