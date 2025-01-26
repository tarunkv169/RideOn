// eslint-disable-next-line no-unused-vars
import React from "react";
import { Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import UserLogin from "./pages/Userlogin";
import UserRegister from "./pages/UserRegister";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainRegister from "./pages/CaptainRegister";
import Home from "./pages/Home";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";
import UserLogout from "./pages/UserLogout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />}></Route>

        <Route path="/home" element={
            <UserProtectedWrapper>
                 <Home />
            </UserProtectedWrapper>
        }></Route>

        <Route path="/logout" element={
            <UserProtectedWrapper>
                 <UserLogout />
            </UserProtectedWrapper>
        } ></Route>

        <Route path="/login" element={<UserLogin />}></Route>
        <Route path="/register" element={<UserRegister />}></Route>
        <Route path="/captain-login" element={<CaptainLogin />}></Route>
        <Route path="/captain-register" element={<CaptainRegister />}></Route>
      </Routes>
    </div>
  );
};

export default App;
