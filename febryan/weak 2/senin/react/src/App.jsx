import React, { useState } from 'react';

function App() {
  const JumlahSiswa = 40;
  const BatasPanjangKuku = 2;

  const [selectedSiswa, setSelectedSiswa] = useState(1);
  const [panjangKuku, setPanjangKuku] = useState(0);
  const [feedbacks, setFeedbacks] = useState([]);

  const checkKuku = () => {
    const newFeedbacks = [];

    // Validasi apakah panjang kuku valid (non-negatif)
    if (panjangKuku === 0) {
      newFeedbacks.push("Anak anda disabilitas?");
    } else if (panjangKuku > BatasPanjangKuku) {
      newFeedbacks.push(`Siswa nomer ${selectedSiswa} memiliki kuku yang panjang. Guru memberikan hukuman.`);
    } else {
      newFeedbacks.push(`Siswa nomer ${selectedSiswa} memiliki kuku yang rapi. Guru memberikan pujian.`);
    }

    setFeedbacks(newFeedbacks);
  };

  return (
    <div className='container mx-auto mt-8'>
      <div className='max-w-md mx-auto bg-white rounded-md p-6 shadow-md'>
        <h1 className='text-2xl font-bold mb-4'>Kuku Checker App</h1>
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-600'>Pilih Siswa:</label>
          <select
            value={selectedSiswa}
            onChange={(e) => setSelectedSiswa(parseInt(e.target.value))}
            className='mt-1 p-2 border border-gray-300 rounded-md w-full'
          >
            {[...Array(JumlahSiswa)].map((_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-600'>Masukkan Panjang Kuku (cm):</label>
          <input
            type='number'
            value={panjangKuku}
            onChange={(e) => setPanjangKuku(parseFloat(e.target.value))}
            className='mt-1 p-2 border border-gray-300 rounded-md w-full'
          />
        </div>
        <button
          onClick={checkKuku}
          className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800'
        >
          Periksa Kuku Siswa
        </button>
        <div className='mt-4'>
          {feedbacks.map((feedback, index) => (
            <p key={index} className='text-sm text-gray-600'>
              {feedback}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
