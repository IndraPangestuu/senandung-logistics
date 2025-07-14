import { motion } from "framer-motion";
import operator from "./icon/operator.jpg";
import operator2 from "./icon/operator2.jpg";

const Section1 = () => {
  return (
    <section className="bg-white py-20 relative overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-2 items-center gap-10 px-4">
        {/* Kolom Teks dengan animasi slide dan fade */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold leading-snug text-gray-800 mb-6">
            Ahli <span className="text-orange-600">Impor-Ekspor</span> dan{" "}
            <span className="text-orange-600">Distribusi</span> untuk Seluruh Indonesia
          </h2>
          <p className="text-[#0C2D57] text-md md:text-lg leading-relaxed font-medium text-justify mb-4">
            PT SENANDUNG MELODI SEJAHTERA adalah perusahaan jasa pengurusan import
            (Freight Forwarding) yang berdiri sejak tahun 2022 dan berbasis di Jakarta, Indonesia.
            Kami menyediakan solusi import terpercaya melalui pengiriman laut dan udara,
            serta menangani seluruh kebutuhan dokumen impor (PPJK) dengan cepat dan tepat.
          </p>
          <p className="text-[#0C2D57] text-md md:text-lg leading-relaxed font-medium text-justify">
            Dengan tim yang berpengalaman dan berdedikasi, kami berkomitmen memberikan layanan
            yang aman, efisien, dan profesional menjadikan kami mitra logistik andalan Anda di Indonesia.
            <a href="#" className="text-orange-600 hover:underline ml-1">Read More</a>
          </p>
        </motion.div>

        {/* Kolom Gambar dengan animasi fade dan slide */}
        <motion.div
          className="relative w-full flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.5}}
        >
          <div className="relative w-fit">
            <img
              src={operator}
              alt="Operator"
              className="w-72 md:w-80 rounded-2xl shadow-2xl transform rotate-[-4deg] translate-x-2 translate-y-2 z-10 relative"
              style={{ filter: "drop-shadow(5px 10px 15px rgba(0,0,0,0.2))" }}
            />
            <img
              src={operator2}
              alt="Operator 2"
              className="w-72 md:w-80 rounded-2xl shadow-xl absolute top-20 left-50 transform rotate-[5deg] z-0"
              style={{ filter: "drop-shadow(3px 6px 10px rgba(0,0,0,0.15))" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section1;
