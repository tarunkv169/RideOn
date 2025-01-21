// @ts-nocheck
import React, { useEffect, useState } from "react";
import rideon from "../assets/photos/rideon.png"
import { Link } from "react-router-dom";

const CaptainRegister = () => {

   const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [firstname,setFirstname]=useState("");
    const [lastname,setLastname]=useState("");
  
    const [userData,setUserData]=useState({});
  
    useEffect(()=>{
      console.log({userData})
    },[userData])
  
    const onSubmitHandler=async(e)=>{
      e.preventDefault();
      
      setUserData({
        fullname:{
          firstname:firstname,
        lastname:lastname
        },
        email:email,
        password:password
      })
  
      setEmail("");
      setPassword("");
      setFirstname("");
      setLastname("");
  
    }

  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-center bg-cover bg-[url(https://th.bing.com/th/id/OIP.zJyQVa-CFVZpj_h_MTZTJQAAAA?w=407&h=201&rs=1&pid=ImgDetMain)] ">
    <div className="h-screen py-12 px-4 max-w-lg w-full">
      <div className="h-full flex flex-col justify-between w-full bg-black/50 backdrop-blur-lg border border-yellow-500 rounded-xl ">
          <div >
            <form onSubmit={(e)=>onSubmitHandler(e)}>
                <img src={rideon} alt="no_img" className="w-28 mb-10 mt-4 mx-auto bg-[#f5b901] rounded-tl-lg rounded-br-lg" />
              <h3 className="text-lg font-semibold mb-2 ml-10">Fullname</h3>
              <div className="flex items-center justify-center mx-auto mb-7 w-10/12 gap-3">
                <input
                  type="text"
                  required
                  value={firstname}
                  onChange={(e)=>{
                    setFirstname(e.target.value)
                  }}
                  placeholder="first name"
                  className="text-md font-md mx-auto py-2 px-4 w-1/2 bg-[#f2f2f2] border rounded placeholder:text-base"
                />

                <input
                  type="text"
                  value={lastname}
                  onChange={(e)=>{
                    setLastname(e.target.value)
                  }}
                  placeholder="lastname"
                  className="text-md font-md mx-auto py-2 px-4 w-1/2 bg-[#f2f2f2] border rounded placeholder:text-base"
                />
              </div>

              <h3 className="text-lg font-semibold mb-2 ml-10">Email</h3>
              <input
                type="email"
                required
                value={email}
                  onChange={(e)=>{
                    setEmail(e.target.value)
                  }}
                placeholder="email@example.com"
                className="flex items-center justify-center text-md font-md mx-auto mb-7 py-2 px-4 w-10/12 bg-[#f2f2f2] border rounded placeholder:text-base"

              />

              <h3 className="text-lg font-semibold mb-2 ml-10">Password</h3>
              <input
                type="text"
                required
                value={password}
                  onChange={(e)=>{
                    setPassword(e.target.value)
                  }}
                placeholder="Password"
                className="flex items-center justify-center text-md font-md mx-auto mb-7 py-2 px-4 w-10/12 bg-[#f2f2f2] border rounded placeholder:text-base"

              />

              <button className="flex items-center justify-center text-white text-lg font-semibold mt-10 mx-auto py-2 px-4 w-64 bg-black rounded-md">Register</button>

            </form>

            <p className="flex items-center justify-center mt=1" >Already have an account?<Link to={'/captain-login'} className="ml-1 text-[#3c95de] font-semibold text-shadow-black shadow-lg">Log in</Link> </p>
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

export default CaptainRegister;
