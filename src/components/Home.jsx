import React from "react";
import { useState } from "react";


function Home() {
  
  return (
    <div className="home">
      <div  className="left-0 bg-black top-0 absolute w-full h-full image p-10">
        <div className="border-4 flex flex-col items-center justify-center w-full h-full">
          <img
            className="w-28"
            src="https://vrvsecurityservices.com/wp-content/uploads/2023/12/logo-.png"
            alt=""
          />
          <p className="text-5xl text-white mt-1 font-bold">VRV Security</p>
          <button
            
            className="bg-purple-800 border-4 border-purple-400 rounded-3xl text-2xl px-10 py-2 mt-10 text-white font-semibold"
          >
            Get Started <i className="ml-2 fa-solid fa-arrow-right"></i>
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
