import React from "react";

const Table = () => {
    return (
        <div className="flex flex-col h-screen bg-white">
            <div className="overflow-x-auto mx-auto my-8">
                <h1 className="text-4xl font-poppins font-bold mt-4 text-black text-center">data kehadiran</h1>
                <table className="min-w-full text-center text-base font-light">
                    <thead className="border-b font-medium dark:border-neutral-500 bg-black text-white">
                        <tr>
                            <th className="px-6 py-3">No</th>
                            <th className="px-6 py-3">Nama</th>
                            <th className="px-6 py-3">Keterangan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b dark:border-neutral-500">
                            <td className="px-6 py-4 font-medium">1</td>
                            <td className="px-6 py-4">Ilham</td>
                            <td className="px-6 py-4 bg-green-200">Hadir</td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                            <td className="px-6 py-4 font-medium">2</td>
                            <td className="px-6 py-4">Febryan</td>
                            <td className="px-6 py-4 bg-green-200">Hadir</td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                            <td className="px-6 py-4 font-medium">3</td>
                            <td className="px-6 py-4">Gilang</td>
                            <td className="px-6 py-4 bg-green-200">Hadir</td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                            <td className="px-6 py-4 font-medium">4</td>
                            <td className="px-6 py-4">Izzy</td>
                            <td className="px-6 py-4  bg-green-200">Hadir</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;