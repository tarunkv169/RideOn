// @ts-nocheck
import React from "react";
import { Link } from "react-router-dom";
import rideon from "../assets/photos/rideon.png";

const Home = () => {
  return (
    <div className="relative h-screen w-full">

      <div className="absolute inset-0 z-0 bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1649877666973-8e9fe20e511e?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]"></div>

         <div className="relative z-10 flex flex-col justify-between h-full">
    
           <img src={rideon} alt="Ride On Logo" className="w-28 ml-8 mt-8" />
  
           <div className="bg-white mx-4 md:mx-20 lg:mx-40 p-6 rounded-lg shadow-lg">
             <h2 className="text-3xl font-bold mb-4">Get Started</h2>
             <Link to={"/login"} className="inline-block text-center text-white py-3 w-full bg-black rounded-lg" > Continue</Link>
           </div>
         </div>
    </div>
  );
};

export default Home;
