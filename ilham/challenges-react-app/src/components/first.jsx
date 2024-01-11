import React from "react";
import Navbar from "./fragments/navbar";
import ImageSlider from "./fragments/imageslide";
import Navigation from "./fragments/butnav";

const First = () => {
  return (
    <div className="flex flex-col h-screen bg-cover bg-center " style={{backgroundImage: "url('/images/schlcls.png')" }}>
      <div className="flex flex-col items-center justify-center bg-black">
        <Navbar />
      </div>
  <div>
  <h1 className="text-4xl font-mono font-bold mt-4 text-white">
          Selamat datang di Learnsite😁
        </h1>
    <ImageSlider/>
  </div>
      <div className="flex-1 flex flex-col items-center justify-end">
      <Navigation/>
      </div>
    </div>
  );
};

export default First;