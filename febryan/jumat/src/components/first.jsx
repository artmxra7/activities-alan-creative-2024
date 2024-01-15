import React, { useEffect, useState } from "react";
import Navbar from "./fragments/navbar";
import Bottnavbar from "./fragments/Bottnavbar"; // Import Bottnavbar
import Footer from "./fragments/footer";
import Example from "./fragments/crcl";
import "./style.css"

const First = () => {
  const [isHighZoom, setIsHighZoom] = useState(false);

  useEffect(() => {
    const handleZoomChange = () => {
      const currentZoom = window.devicePixelRatio || 1;
      setIsHighZoom(currentZoom > 1);
    };

    window.addEventListener("resize", handleZoomChange);

    return () => {
      window.removeEventListener("resize", handleZoomChange);
    };
  }, []);

  // Atur nilai batas zoom tertentu, misalnya 1.5
  const zoomThreshold = 1.5;

  return (
    <div className="flex flex-col min-h-screen bg-cover bg-center bg-emerald-300">
      <div className="flex flex-col items-center justify-center bg-blue-300">
        {/* Mengganti antara Navbar dan Bottnavbar berdasarkan tingkat zoom */}

        <Navbar />
      </div>
      <div className="flex-1 flex flex-col items-center">
        <h1 className="text-4xl font-mono font-bold mt-4 text-white">
          Selamat datang di Vagaon
        </h1>
        <Example />
      </div>
      <Footer className="footer" />
      {/* Menambahkan Bottnavbar di bagian bawah jika tin gkat zoom mencapai batas tertentu */}
      <Bottnavbar />
    </div>
  );
};

export default First;
