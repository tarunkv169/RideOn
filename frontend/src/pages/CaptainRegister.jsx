// @ts-nocheck
import React, { useEffect, useState } from "react";
import rideon from "../assets/photos/rideon.png";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CapatainContext";
import axios from "axios";

const CaptainRegister = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const { captain, setCaptain } = React.useContext(CaptainDataContext);

  const [userData, setUserData] = useState({});

  useEffect(() => {
    console.log({ userData });
  }, [userData]);

  const submitHandler = async (e) => {
    e.preventDefault();

    const captainData = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/register`,
        captainData
      );

      if (response.status === 201) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem("token", data.token);
        navigate("/captain-home");
      }
    } catch (err) {
      console.error("Captain registration failed:", err);
    }


    setEmail("");
    setPassword("");
    setFirstname("");
    setLastname("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-center bg-cover bg-[url(https://th.bing.com/th/id/OIP.zJyQVa-CFVZpj_h_MTZTJQAAAA?w=407&h=201&rs=1&pid=ImgDetMain)]">
      <div className="h-auto py-8 px-4 max-w-lg w-full">
        <div className="h-full flex flex-col justify-between w-full bg-black/50 backdrop-blur-lg border border-yellow-500 rounded-xl p-6">
          <form onSubmit={(e) => submitHandler(e)} className="flex flex-col">
            <img
              src={rideon}
              alt="no_img"
              className="w-28 mb-8 mt-2 mx-auto bg-[#f5b901] rounded-tl-lg rounded-br-lg"
            />

    
            <h3 className="text-lg font-semibold mb-2 ml-4">Fullname</h3>
            <div className="flex mx-auto mb-6 w-11/12 gap-3">
              <input
                type="text"
                required
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                placeholder="first name"
                className="text-md py-2 px-4 w-1/2 bg-[#f2f2f2] border rounded placeholder:text-base"
              />

              <input
                type="text"
                required
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                placeholder="lastname"
                className="text-md py-2 px-4 w-1/2 bg-[#f2f2f2] border rounded placeholder:text-base"
              />
            </div>

       
            <h3 className="text-lg font-semibold mb-2 ml-4">Email</h3>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              className="mx-auto mb-6 py-2 px-4 w-11/12 bg-[#f2f2f2] border rounded placeholder:text-base"
            />


            <h3 className="text-lg font-semibold mb-2 ml-4">Password</h3>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="mx-auto mb-6 py-2 px-4 w-11/12 bg-[#f2f2f2] border rounded placeholder:text-base"
            />

            <h3 className="text-lg font-semibold mb-2 ml-4">Vehicle Info</h3>
            <div className="flex mx-auto mb-6 w-11/12 gap-3">
              <input
                type="text"
                required
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
                placeholder="Vehicle Color"
                className="py-2 px-4 w-1/2 bg-[#f2f2f2] border rounded placeholder:text-base"
              />
              <input
                type="text"
                required
                value={vehiclePlate}
                onChange={(e) => setVehiclePlate(e.target.value)}
                placeholder="Vehicle Plate"
                className="py-2 px-4 w-1/2 bg-[#f2f2f2] border rounded placeholder:text-base"
              />
            </div>

            <div className="flex mx-auto mb-8 w-11/12 gap-3">
              <input
                type="number"
                required
                value={vehicleCapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
                placeholder="Vehicle Capacity"
                className="py-2 px-4 w-1/2 bg-[#f2f2f2] border rounded placeholder:text-base"
              />
              <select
                required
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className="py-2 px-4 w-1/2 bg-[#f2f2f2] border rounded placeholder:text-base"
              >
                <option value="" disabled>
                  Select Vehicle Type
                </option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="moto">Moto</option>
              </select>
            </div>

      
            <button className="mx-auto text-white text-lg font-semibold py-2 px-4 w-52 bg-black rounded-md">
              Register
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-sm">
              Already have an account?{" "}
              <Link
                to={"/captain-login"}
                className="ml-1 text-[#3c95de] font-semibold text-shadow-black shadow-lg"
              >
                Log in
              </Link>
            </p>
          </div>

       
          <div className="mt-4">
            <p className="text-xs px-4 py-3 leading-tight text-center text-gray-200">
              This site is protected by reCAPTCHA and the{" "}
              <span className="underline">Google Privacy Policy</span> and{" "}
              <span className="underline">Terms of Service</span> apply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptainRegister;
