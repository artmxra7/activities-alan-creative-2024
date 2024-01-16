import React from 'react';
import Navbar from '../components/fragments/navbar';
import { Link } from 'react-router-dom';

const ProgramDescription = () => {
  return (
    <div className="flex flex-col h-screen bg-cover bg-center" style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/schlcls.png')"}}>
      <div className="flex flex-col items-center justify-center bg-black">
        <Navbar />
      </div>
      <div className=" p-8 rounded-md shadow-md">
        <h1 className="text-4xl font-bold mb-6 text-white">Program Bimbingan Belajar</h1>
        <p className="text-lg mb-6 text-white">
          Selamat datang di Program Bimbingan Belajar kami! Kami percaya bahwa setiap individu memiliki potensi unik untuk mencapai kesuksesan akademis, dan melalui bimbingan belajar kami, kami bertujuan untuk membantu siswa mengoptimalkan kemampuan mereka.
        </p>

        <div className="bg-opacity-50 p-4 rounded-md mb-6 bg-slate-600">
          <h2 className="text-2xl font-bold mb-2 text-white">Tujuan Program</h2>
          <ul className="list-disc ml-8 text-white">
            <li>Meningkatkan Prestasi Akademis: Memberikan dukungan yang dibutuhkan untuk meningkatkan pemahaman materi pelajaran, meningkatkan nilai ujian, dan mencapai prestasi akademis yang optimal.</li>
            <li>Pengembangan Keterampilan Belajar: Melatih siswa dengan teknik belajar efektif, membantu mereka mengembangkan keterampilan organisasi, manajemen waktu, dan pemecahan masalah.</li>
            <li>Motivasi dan Kepercayaan Diri: Membangun rasa percaya diri siswa, memberikan motivasi, dan meningkatkan minat belajar agar mereka lebih termotivasi dalam menghadapi tantangan akademis.</li>
          </ul>
        </div>

        <div className="bg-slate-600 bg-opacity-50 p-4 rounded-md mb-6">
          <h2 className="text-2xl font-bold mb-2 text-white">Metode Pembelajaran</h2>
          <ul className="list-disc ml-8 text-white">
            <li>Tutor Individu: Siswa akan mendapatkan bimbingan langsung dari tutor berpengalaman dalam mata pelajaran tertentu, membantu mereka memahami konsep-konsep yang sulit.</li>
            <li>Kelas Kecil: Kelas kecil memungkinkan interaksi lebih intensif antara guru dan siswa, menciptakan lingkungan belajar yang mendukung dan interaktif.</li>
            <li>Materi Pembelajaran Terstruktur: Kami menyediakan materi pembelajaran terstruktur yang dirancang sesuai kurikulum, membantu siswa memahami materi secara menyeluruh.</li>
            <li>Uji Coba dan Latihan: Siswa akan memiliki kesempatan untuk menguji pemahaman mereka melalui uji coba dan latihan reguler, membantu mereka mengidentifikasi area yang perlu diperbaiki.</li>
          </ul>
        </div>

        <div className="bg-slate-600 bg-opacity-50 p-4 rounded-md mb-6">
          <h2 className="text-2xl font-bold mb-2 text-white">Fasilitas Program</h2>
          <ul className="list-disc ml-8 text-white">
            <li>Ruangan Belajar Nyaman: Ruangan belajar kami dirancang untuk menciptakan lingkungan yang nyaman dan kondusif untuk belajar.</li>
            <li>Bahan Ajar Terkini: Kami selalu memastikan bahwa bahan ajar yang disediakan selalu terkini dan sesuai dengan perkembangan kurikulum.</li>
            <li>Konseling Pendidikan: Kami menyediakan layanan konseling pendidikan untuk membantu siswa merencanakan jalur akademis mereka dan memberikan saran mengenai pilihan karir.</li>
          </ul>
        </div>
        <p className="text-lg text-slate-200 font-poppins font-bold">Bergabunglah Dengan Kami! Jangan lewatkan kesempatan untuk mengoptimalkan potensi belajar Anda. Bergabunglah dengan Program Bimbingan Belajar kami dan temukan perbedaan dalam pencapaian akademis Anda. Hubungi kami hari ini untuk informasi lebih lanjut dan pendaftaran!</p>
        <Link to="/lglfrm" className="text-blue-500">Gabung</Link>
      </div>
    </div>
  );
}

export default ProgramDescription;
