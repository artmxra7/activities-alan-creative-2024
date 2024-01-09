import React from "react";
import Navbar from "./fragments/navbar";
import Footer from "./fragments/footer";
import ImageSlider from "./fragments/imageslide";

const First = () => {
  return (
    <div className="flex flex-col h-screen bg-cover bg-center " style={{backgroundImage: "url('/images/schlcls.png')" }}>
      <div className="flex flex-col items-center justify-center bg-black">
        <Navbar />
      </div>
  <div>
    <ImageSlider/>
  </div>
      <div className="flex-1 flex flex-col items-center">
        <h1 className="text-4xl font-mono font-bold mt-4 text-white">
          Selamat datang di Learnsite😁
        </h1>
      </div>
      <Footer />
    </div>
  );
};

export default First;