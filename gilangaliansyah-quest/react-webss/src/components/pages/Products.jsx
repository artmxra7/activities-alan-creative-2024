import React from 'react';
import '../../../src/App.css';

const products = [
  {
    id: 1,
    name: 'Tokyo ghoul',
    image: '../../images/Ghoul.jpg', // Ganti URL gambar sesuai kebutuhan
  },
  {
    id: 2,
    name: 'Shigatsu wa Kimi no Uso',
    image: '../../images/kaori.jpeg', // Ganti URL gambar sesuai kebutuhan
  },
  {
    id: 3,
    name: 'Your Name.',
    image: '../../images/yourname.png', // Ganti URL gambar sesuai kebutuhan
  },
];

const Products = () => {
  return (
    <div className="container mx-auto p-8">
        <h1 className='text-3xl font-bold mb-8'>Minggunan</h1>
        <div className="flex flex-row space-x-4">
          {products.map(product => (
            <div key={product.id} className="max-w-xs">
              <div className="bg-white p-4 rounded-lg shadow">
                <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4 rounded-lg" />
                <h2 className="text-lg font-bold">{product.name}</h2>
              </div>
            </div>
          ))}
        </div>

        <nav className="p-4 ">
        <button className="border rounded-lg text-black px-4 py-2 mr-2 hover:bg-black hover:text-white cursor-pointer">Streaming</button>
        <button className="border rounded-lg text-black px-4 py-2 mr-2 hover:bg-black hover:text-white cursor-pointer">Genre</button>
        <button className="border rounded-lg text-black px-4 py-2 mr-2 hover:bg-black hover:text-white cursor-pointer">Batch</button>
      </nav>
        
        <footer className="bg-black text-white text-center " style={{ width: "109%", marginLeft: "-5%",  marginTop: "4%"}}>
          <p>&copy; 2023 AnimeStreamHub</p>
          <p className="mt-5">
            kakkoinime adalah destinasi utama Anda untuk menonton streaming anime terbaru dan terbaik. Meresapi diri Anda dalam dunia
            cerita yang memikat, karakter yang berwarna, dan animasi yang memukau. Jelajahi berbagai genre dan temukan serial dan film anime
            favorit Anda yang baru.
          </p>
          <p className="mt-5">
            Hubungi Kami: support@kakkoinime.com | Telepon: (123) 456-7890
          </p>
       </footer>
    </div>
  );
};

export default Products;
