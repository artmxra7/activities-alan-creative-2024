import React from "react";
import Navigationabs from "../components/fragments/absnav";

const Table = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center" style={{backgroundImage: "url('/images/schlcls.png')" }}>
      <h1 className="text-4xl font-poppins font-bold mb-4 text-white text-center">Absensi</h1>
      <div className="flex flex-1 flex-col"> 
        <table className="flex flex-1 flex-col min-w-full w-full text-center text-lg font-light">
          <thead className="border-b font-medium dark:border-neutral-500 bg-black text-white">
            <tr>
              <th className="px-12 py-4">No</th>
              <th className="px-12 py-4">Nama</th>
              <th className="px-5  py-4">Keterangan</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b dark:border-neutral-500">
              <td className="px-12 py-4 bg-white font-medium">1</td>
              <td className="px-12 py-4 bg-white">Ilham</td>
              <td className="px-12 py-4 bg-green-200 ">Hadir</td>
            </tr>
            <tr className="border-b dark:border-neutral-500">
              <td className="px-12 py-4 bg-white font-medium">2</td>
              <td className="px-12 py-4 bg-white">Zeverus</td>
              <td className="px-12 py-4 bg-green-200">Hadir</td>
            </tr>
            <tr className="border-b dark:border-neutral-500">
              <td className="px-12 py-4 bg-white font-medium">3</td>
              <td className="px-12 py-4 bg-white">Gilang</td>
              <td className="px-12 py-4 bg-green-200">Hadir</td>
            </tr>
            <tr className="border-b dark:border-neutral-500">
              <td className="px-12 py-4 font-medium bg-white">4</td>
              <td className="px-12 py-4 bg-white">Izzy</td>
              <td className="px-12 py-4 bg-green-200">Hadir</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Navigationabs />
    </div>
  );
};

export default Table;
