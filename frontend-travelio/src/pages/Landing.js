import React from "react";
import Navbar from "../components/Navbar";

import BackgroundGlobe from "../components/BackgroundGlobe";

import {useNavigate} from 'react-router-dom'

const Landing = () => {

  const navigate = useNavigate();

  return (
    <>
  <Navbar />
  <div
    className="relative flex min-h-screen gap-6 text-white bg-transparent justify-center"
    style={{ overflowY: "hidden", height: "10vh" }}
  >
    <div>
      <div className="flex flex-col gap-4 py-40 align-center">
        <div className="flex mt-2">
          {"Explorer.AI".split("").map((letter, index) => {
            return (
              <span
                key={index}
                className="hover:-mt-2 tracking-wide transition-all duration-500 hover:duration-100 text-8xl font-bold hover:text-green-300"
                style={{ zIndex: 9999 }}
              >
                {letter}
              </span>
            );
          })}
        </div>
      </div>

      
      <button
        className="absolute top-1/3 mt-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-30 rounded-md px-9 py-3 text-green-300 text-3xl hover:scale-105 active:scale-95 font-bold mt-4"
        style={{ zIndex: 9999 }}
        onClick={() => {navigate('/login')}}
      >
        Make memories
      </button>
    </div>
  </div>
  <BackgroundGlobe />
</>

  );
};

export default Landing;
