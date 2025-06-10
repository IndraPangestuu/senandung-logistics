import React from "react";
import logo from "../AboutUs/icon/logo_senandung.png"; // Adjust the path as necessary

const Section1 = () => {
    return (
        <div className="bg-white text-gray-800 p-10 md:pt-25 font-sans max-w-6xl mx-auto items-center">
            {/* Logo dan Nama Perusahaan (Dipusatkan) */}
            <div className="flex items-center justify-center mb-10 text-center">
                <img
                    src={logo}
                    alt="Logo PT Senandung Melodi Sejahtera"
                    className="w-12 h-12 md:w-22 md:h-20 bg-transparent mb-2"
                />
                <div>
                    <h1 className="text-3xl font-bold text-orange-600 leading-8">SENANDUNG</h1>
                    <h2 className="text-xl font-bold text-blue-900 leading-8">MELODI SEJAHTERA</h2>
                </div>
            </div>

            {/* Grid: Deskripsi dan Tagline */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-center ">
                {/* Deskripsi Perusahaan */}
                <p className="text-gray-700 leading-relaxed text-xl font-medium text-justify">
                    PT Senandung Melodi Sejahtera adalah perusahaan penyedia jasa pengurusan impor (freight forwarding)
                    yang telah berdiri sejak tahun 2022 dan berbasis di Jakarta, Indonesia. Kami menawarkan solusi impor
                    yang terpercaya melalui jalur laut dan udara, serta menangani seluruh proses dan dokumen kepabeanan
                    (PPJK) secara cepat, tepat, dan efisien.
                </p>

                {/* Tagline */}
                <div className="text-left pl-20">
                    <p className="text-5xl md:text-4xl font-bold text-blue-900 leading-snug">
                        Your Trusted<br />
                        Partner in <span className="text-orange-500">Global<br />Trade and Logistics</span>
                    </p>
                </div>
            </div>

            {/* Cakupan Layanan */}
            <div className="mt-12">
                <h3 className="text-center text-2xl font-bold text-blue-900 mb-6 justify-center">
                    Cakupan layanan PT. Senandung Melodi Sejahtera
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 text-blue-900 text-sm max-w-4xl mx-auto justify-center">
                    <ul className="list-disc list-inside space-y-1 text-lg pl-6">
                        <li><span className="font-semibold">Pengurusan dokumen kepabeanan</span></li>
                        <li><span className="font-semibold">Proses customs clearance</span></li>
                        <li><span className="font-semibold">Layanan all-in-one</span></li>
                    </ul>
                    <ul className="list-disc list-inside space-y-1 text-lg pl-9">
                        <li><span className="font-semibold">Pengiriman door-to-door</span></li>
                        <li><span className="font-semibold">Jasa undername</span></li>
                        <li><span className="font-semibold">Pengiriman barang ke seluruh Indonesia</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Section1;
