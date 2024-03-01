// home.jsx

import React from 'react';

const Home = () => {
  return (
    
    <div className="flex space-x-5" style={{ marginTop: '100px', justifyContent: 'center' }}>
      <div className="bg-gray-800 p-0 rounded-md shadow-md relative" style={{ height: '400px', width: '250px' }} >
        <button
          className="bg-blue-600 text-white rounded-full w-10 h-10 absolute bottom-20 text-2xl " style={{ left: '50%', transform: 'translateX(-50%)' }}
          onClick={() => {
            // Handle klik tombol tambah di sini jika diperlukan
          }}
        >+</button>
        <p className="text-white absolute bottom-10" style={{ left: '50%', transform: 'translateX(-50%)' }}>Buat Cerita</p>
      </div>

      <div className="bg-gray-800 p-0 rounded-md shadow-md" style={{ height: '400px', width: '250px' }}>
        <video
          className="w-full rounded-md"
          controls
          poster="/path/to/poster-image.jpg"
          style={{ height: '400px' }} 
        >
          <source src="/path/to/your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="bg-gray-800 p-0 rounded-md shadow-md" style={{ height: '400px', width: '250px' }}>
      </div>
    </div>
  );
};

export default Home;
