// @ts-nocheck
import React, { useContext, useEffect, useState } from "react";
import rideon from "../assets/photos/rideon.png"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";







const UserRegister = () => {
  
const [firstname,setfirstname]=useState('');
const [lastname,setlastname]=useState('');
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');

const [userData,setUserData]=useState({});

const [user,setUser] = useContext(UserDataContext);

const navigate = useNavigate();

useEffect(() => {
  console.log({ userData });
   }, [userData]);

   
const onSubmitHandler=async(e)=>{
  e.preventDefault();
  
  const newUser = ({
    fullname:{
      firstname:firstname,
      lastname:lastname
    },
    email:email,
    password:password
  })

  
  const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser)

  if(response.status===201)
  {
     const data = response.data;
     setUser(data.user);
     localStorage.setItem('token', data.token);
     navigate('/home')

  }


  setfirstname('');
  setlastname('');
  setEmail('');
  setPassword('');

}


  return (
    <div className="min-h-screen flex items-center justify-center bg-center bg-cover md:bg-contain lg:bg-cover bg-[url(https://images.pexels.com/photos/5584203/pexels-photo-5584203.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load)]">
      <div className="py-12 px-4 w-full max-w-lg h-screen">
      <div className="h-full flex flex-col justify-between w-full bg-black/50 backdrop-blur-lg border border-yellow-500 rounded-xl">
        <div >
          <img src={rideon} alt="no_img" className="w-28 mb-10 mt-4 mx-auto bg-[#f5b901] rounded-tl-lg rounded-br-lg" />
          <form onSubmit={(e)=>{onSubmitHandler(e)}}>
              <h3 className="text-lg font-medium mb-2 ml-10">What's your name</h3>
              <div className="flex items-center justify-center mx-auto mb-7 w-10/12 gap-3">
                 <input 
                    type="text" 
                    required
                    value={firstname}
                    onChange={(e)=>{
                      setfirstname(e.target.value)
                    }}
                    placeholder="First name"
                    className=" py-2 px-4 w-1/2 bg-[#f2f2f2] border rounded placeholder:text-base"
                 />

                 <input 
                    type="text" 
                    value={lastname}
                    onChange={(e)=>{
                      setlastname(e.target.value)
                    }}
                    placeholder="Last name"
                    className="py-2 px-4 w-1/2 bg-[#f2f2f2] border rounded placeholder:text-base"
                 />

              </div>

              <h3 className="text-lg font-medium mb-2 ml-10">Email</h3>
              <input 
                type="email"
                required
                value={email}
                onChange={(e)=>{
                  setEmail(e.target.value)
                }}
                placeholder="email@example.com"
                className="flex items-center justify-center mb-7 mx-auto py-2 px-4 w-10/12 bg-[#f2f2f2] border rounded placeholder:text-base" 
              />

              <h3 className="text-lg font-medium mb-2 ml-10">Password</h3>
              <input 
                type="password"
                required
                value={password}
                onChange={(e)=>{
                  setPassword(e.target.value);
                }}
                placeholder="Password"
                className="flex items-center justify-center mb-7 mx-auto py-2 px-4 w-10/12 bg-[#f2f2f2] border rounded placeholder:text-base" 
              />

             <button className="inline-block flex items-center justify-center text-white text-lg font-bold mx-auto mt-10 p-2 w-64 bg-black rounded-md ">Create Account</button>
          </form>
          
           <p className="flex items-center justify-center text-md mt-1 mx-auto ">Already have an account? <Link to={'/login'} className="text-[#3c95de] font-semibold ml-2 shadow-lg" >Log in</Link></p>

        </div>
        <div>
            <p className='text-sm px-10 py-4 leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
             Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
        </div>
      </div>
    </div>
    </div>
  )
};

export default UserRegister;
