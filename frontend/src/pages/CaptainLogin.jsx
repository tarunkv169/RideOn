// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import rideon from "../assets/photos/rideon.png"

const CaptainLogin = () => {
 
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const [userData,setUserData]=useState({});

  useEffect(()=>{
    console.log({userData})
  },[userData])

  const onSubmitHandler=async(e)=>{
    e.preventDefault();
    
    setUserData({
      email:email,
      password:password
    })

    setEmail("");
    setPassword("");

  }

  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-center bg-cover bg-[url(https://th.bing.com/th/id/OIP.zJyQVa-CFVZpj_h_MTZTJQAAAA?w=407&h=201&rs=1&pid=ImgDetMain)] ">
      <div className="h-screen py-12 px-4 max-w-lg w-full">
        <div className="h-full flex flex-col justify-between w-full bg-black/50 backdrop-blur-lg border border-yellow-500 rounded-xl ">
            <div>
                 <img src={rideon} alt="no_img" className="w-28 mb-10 mt-4 mx-auto bg-[#f5b901] rounded-tl-lg rounded-br-lg"/>
                 <form onSubmit={(e)=>{onSubmitHandler(e)}}>
                      <h3 className="text-lg font-semibold mb-2 ml-10">Captain Email</h3>
                      <input 
                       required
                       type="email"
                       value={email}
                       onChange={(e)=>{
                         setEmail(e.target.value);
                       }}
                       placeholder="email@example.com"
                       className="flex items-center justify-center text-lg mb-7 mx-auto py-2 px-4 w-10/12 bg-[#f2f2f2] border rounded placeholder:text-base" 
                       />

                      <h3 className="text-lg font-semibold bold mb-2 ml-10">Captain Password</h3>
                      <input 
                      required
                      type="password"
                      value={password}
                      onChange={(e)=>{
                        setPassword(e.target.value);
                      }}
                      placeholder="Password"
                      className="flex items-center justify-center text-lg mb-7 mx-auto py-2 px-4 w-10/12 bg-[#f2f2f2] border rounded placeholder:text-base"
                       />

                      <button className="inline-block flex items-center justify-center text-white text-lg font-semibold mx-auto py-2 px-4 w-64 bg-black rounded-md">Log in</button>
                 </form>

                 <p className="flex items-center justify-center mt-1">New here?{" "}<Link to={'/captain-register'} className="ml-1 text-[#3c95de] font-semibold text-shadow-black shadow-lg">Create an account</Link></p>
            </div>
            <div>
                 <Link to={'/login'} className="inline-block flex items-center justify-center text-white text-lg font-semibold mx-auto  mb-14 py-2 px-4 w-64 bg-[#f5b901] rounded-md">Log in as User</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CaptainLogin;
