import React from "react";
import Navbar from "./components/navbar";
import Form from "./components/form";

const App = () => {

    return (
        <div className="flex flex-col h-screen bg-cover bg-center bg-blue-300 ">
            <div className="flex flex-col items-center justify-center bg-blue-800" style={{
                borderBottomLeftRadius: '25px',
                borderBottomRightRadius: '25px',
                borderTopLeftRadius: '0',
                borderTopRightRadius: '0',
            }} >
                <Navbar />
            </div>
            <div className="flex-1 flex flex-col items-center">
                <h1 className="text-4xl font-mono font-bold mt-4 text-white">Pendaftaraan</h1>
                <Form />
            </div>
        </div>
    );

};

export default App;