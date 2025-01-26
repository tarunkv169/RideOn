import axios from "axios";
import React from "react";
// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserLogout = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  axios.get(`http://localhost:4000/users/logout`,{
    headers:{
        Authorization: `Bearer ${token}`
    }
  }).then((response)=>{
    if(response.status===200)
    {
        localStorage.removeItem('token');
        navigate('/login')
    }
  }).catch((error) => {
    console.error('Logout failed:', error);
  });

  return (
       <div>UserLogout</div>
  );
};

export default UserLogout;
