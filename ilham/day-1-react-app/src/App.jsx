import Form from "./components/form";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import React from "react";

const App = () => {
  return (
    <div className="flex flex-col h-screen bg-cover bg-center bg-emerald-300">
      <div className="flex flex-col items-center justify-center bg-black">
        <Navbar /> 
      </div>
      <div className="flex-1 flex flex-col items-center">
        <h1 className="text-4xl font-mono font-bold mt-4 text-black">
          pendaftaran 
        </h1>
        <Form/>
      </div>
      
      <Footer />
    </div>
  );
};

export default App;
