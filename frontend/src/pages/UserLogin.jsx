// @ts-nocheck
import React, { useState } from "react";
import { Link } from "react-router-dom";
import rideon from "../assets/photos/rideon.png"
import car from "../assets/photos/car.jpg"


const Userlogin = () => {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [userData,setUserData]=useState({});

  const submitHandler=(e)=>{

    e.preventDefault();
    
    setUserData({
      email: email,
      password: password
    })

    console.log(userData);

    setEmail('')
    setPassword('')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-center bg-cover md:bg-contain lg:bg-cover bg-[url(https://images.pexels.com/photos/5584203/pexels-photo-5584203.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load)]">
      <div className="py-12 px-4 w-full max-w-lg h-screen w-full">
        <div className="h-full flex flex-col justify-between bg-white/30 backdrop-blur-md border-1 border-gray-700 rounded-xl">
          <div>
            <img src={rideon} alt="no_img" className="w-28 mb-10 mt-4 mx-auto" />
            <form onSubmit={(e) => submitHandler(e)}>
              <h3 className="text-lg font-medium mb-2 ml-10">What's your email</h3>
              <input
                required
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                    }}
                    type="email"
                    placeholder="email@example.com"
                    autoComplete="current-email"
                    className="flex items-center justify-center mb-7 mx-auto py-2 px-4 text-lg w-10/12 bg-[#f2f2f2] rounded border placeholder:text-base"
                    />

                    <h3 className="text-lg font-medium mb-2 ml-10">Enter password</h3>
                    <input
                    required
                    value={password}
                    onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                placeholder="password"
                autoComplete="current-password"
                className="flex items-center justify-center mb-7 mx-auto py-2 px-4 text-lg w-10/12 bg-[#f2f2f2] rounded border placeholder:text-base"
              />

              <button
                type="submit"
                className="inline-block flex items-center justify-center text-white text-lg font-semibold mx-auto py-2 px-4 w-64 bg-black rounded-md"
              >
                Log in
              </button>
              <p className="text-center mt-2">
                New here?{" "}
                <Link to={"/register"} className="text-blue-600">
                  Create an account
                </Link>
              </p>
            </form>
          </div>
          <div>
            <Link
              to={"/Captain-login"}
              className="inline-block flex items-center justify-center text-lg text-white font-semibold mb-14 mx-auto py-2 px-4 w-64 bg-[#008080] rounded-md"
            >
              Log in as Captain
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userlogin;
