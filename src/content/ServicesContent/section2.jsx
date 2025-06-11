import React from "react";
import imgSection from '../../assets/hero1.jpg';

const Section2 = () => {
  return (
    <section className="pl-12 -mt-15 flex gap-2 mb-8 gap-20">
      <div className="flex-1">
        <img src={imgSection} alt="Image-Section2" className="w-[500px] h-[260px] object-cover rounded-xl"/>
      </div>
      <div className="flex-2 flex flex-col gap-3">
        <h2 className="font-bold text-3xl text-[#0C2D57]">Why Choose PT. Senandung Melodi Sejahtera?</h2>
        <ul className="list-disc pl-5 text-[#878787]">
          <li>Layanan end-to-end</li>
          <li>Bebas repot urus bea cukai & pajak</li>
          <li>Jaringan global</li>
          <li>Real-time tracking</li>
          <li>Cocok untuk barang kecil, bernilai tinggi</li>
        </ul>
      </div>
    </section>
  )
}

export default Section2;