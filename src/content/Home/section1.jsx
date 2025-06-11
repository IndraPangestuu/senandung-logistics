// import React from "react";
// import { Link } from "react-router-dom";
import operator from "./icon/operator.jpg";
import operator2 from "./icon/operator2.jpg";

const Section1 = () => {
  return (
    <section className="bg-white py-45">
      <div className="grid md:grid-cols-2 items-center">
        {/* Kolom Teks */}
        <div
          className="w-fit md:w-auto mb-8 md:mb-0 px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Ahli <span className="text-orange-600">Impor-Ekspor</span> dan{' '}
            <span className="text-orange-600">Distribusi</span> untuk Seluruh Indonesia
          </h2>
          <p className="text-[#0C2D57] mb-4 text-sm md:text-lg font-medium text-justify">
            PT SENANDUNG MELODI SEJAHTERA adalah perusahaan jasa pengurusan import
            (Freight Forwarding) yang berdiri sejak tahun 2022 dan berbasis di Jakarta, Indonesia.
            Kami menyediakan solusi import terpercaya melalui pengiriman laut dan udara,
            serta menangani seluruh kebutuhan dokumen impor (PPJK) dengan cepat dan tepat.
          </p>
          <p className="text-[#0C2D57] text-sm md:text-lg font-medium text-justify">
            Dengan tim yang berpengalaman dan berdedikasi, kami berkomitmen memberikan layanan
            yang aman, efisien, dan profesional menjadikan kami mitra logistik andalan Anda di Indonesia.
            <a href="" className="text-orange-500 text-sm"> - Read More</a>
          </p>
        </div>

        {/* Kolom Gambar */}
        <div className="relative w-screen max-w-md mx-auto mt-10">
          {/* Gambar Utama */}
          <img
            // src="https://images.unsplash.com/photo-1518527989017-5baca7a58d3c?w=250&h=400&fit=crop"
            src={operator}
            alt="Logistik"
            className="rounded-xl w-[60%] h-fit shadow-lg"
          />

          {/* Gambar Kecil di Bawah */}
          <div className="flex space-x-4">
            <img
              // src="https://images.unsplash.com/photo-1518527989017-5baca7a58d3c?w=250&h=400&fit=crop"
              src={operator2}
              alt="Petugas Logistik 1"
              className="rounded-xl w-[60%] h-fit shadow-lg absolute left-61 bottom-[-160px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section1;