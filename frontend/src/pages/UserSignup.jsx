import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'
import rideon from '../assets/photos/rideon.png'



const UserSignup = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')
  const [ userData, setUserData ] = useState({})

  const navigate = useNavigate()



  const { user, setUser } = useContext(UserDataContext)




  const submitHandler = async (e) => {
    e.preventDefault()
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password
    }

   
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

    if (response.status === 201) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }


    setEmail('')
    setFirstName('')
    setLastName('')
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
            <h3 className='text-lg font-medium mb-4 text-center'>Create your account</h3>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4'>
              <input
                required
                className='bg-[#eeeeee] w-full rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                type="text"
                placeholder='First name'
                value={firstName}
                onChange={(e) => { setFirstName(e.target.value) }}
              />
              <input
                required
                className='bg-[#eeeeee] w-full rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                type="text"
                placeholder='Last name'
                value={lastName}
                onChange={(e) => { setLastName(e.target.value) }}
              />
            </div>

            <div className='mb-4'>
              <h3 className='text-lg font-medium mb-2'>What's your email</h3>
              <input
                required
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
                className='bg-[#eeeeee] rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
                type="email"
                placeholder='email@example.com'
              />
            </div>

            <div className='mb-4'>
              <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
              <input
                className='bg-[#eeeeee] rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}
                required type="password"
                placeholder='password'
              />
            </div>

            <button
              className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg'
            >Create account</button>

          </form>
          <p className='text-center mt-2'>Already have a account? <Link to='/login' className='text-blue-600'>Login here</Link></p>
        </div>
        <div className='mt-6 text-center'>
          <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
        </div>
      </div>
    </div >
  )
}

export default UserSignup