import React, { Suspense, lazy } from 'react';
const HeroSection = lazy(() => import('../components/HeroSection'));
import heroImage from '../assets/transport-logistics-concept.jpg';
import logo from '../assets/Logo/logo_mendatar_senandung.png';
import truckImage from '../assets/operator.jpg';
import worldIcon from '../assets/icons/around-world_3211573.png';
import deliveryIcon from '../assets/icons/delivered_16767938.png';
import hoursIcon from '../assets/icons/24-hours.png';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Suspense fallback={<div>Loading Hero Section...</div>}>
        <HeroSection
          imageSrc={heroImage}
          title="About"
          subTitle="Home > About"
          height="h-[70vh]"
          textSize="text-[2.5vw] sm:text-sm"
        />
      </Suspense>

      {/* Company Description Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-start gap-8 mb-16">
          <div className="lg:w-1/2">
            <img src={logo} alt="Senandung Logo" className="mb-6 max-w-[300px]" />
            <p className="text-gray-700 mb-4 max-w-lg">
              PT Senandung Melodi Sejahtera adalah perusahaan penyedia jasa pengurusan impor (freight forwarding) yang telah berdiri sejak tahun 2022 dan berbasis di Jakarta, Indonesia. Kami merupakan mitra terpercaya yang menyediakan pelayanan udara, serta menangani seluruh proses dan dokumen kepabeanan (PIB/K) secara cepat, tepat, dan efisien.
            </p>
          </div>
          <div className="lg:w-1/2 flex items-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 leading-snug">
              Your Trusted Partner in <span className="text-orange-500">Global</span>
              <br />
              <span className="text-orange-500">Trade</span> and <span className="text-blue-600">Logistics</span>
            </h2>
          </div>
        </div>

        {/* Service Coverage Section */}
          <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-center md:text-left">Cakupan layanan PT. Senandung Melodi Sejahtera</h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <ul className="list-disc list-inside space-y-1">
              <li>Pengurusan dokumen kepabeanan</li>
              <li>Proses customs clearance</li>
              <li>Layanan all-in-one</li>
            </ul>
            <ul className="list-disc list-inside space-y-1">
              <li>Pengiriman door-to-door</li>
              <li>Jasa undername</li>
              <li>Pengiriman barang ke seluruh Indonesia</li>
            </ul>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-2 text-center md:text-left">Frequently Asked Questions</h2>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <h3 className="text-xl font-bold mb-4 text-blue-600 leading-snug">
                Dynamic & Adaptive<br />Transport Solutions
              </h3>
              <img src={truckImage} alt="Transport Solutions" className="rounded-lg shadow-lg max-w-full h-auto" />
            </div>
            <div className="lg:w-1/2 space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Our Vision</h4>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Memberikan kepuasan pelanggan melalui pelayanan terbaik dengan menerapan teknologi, layanan cepat serta harga yang bersaing</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Our Mission</h4>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Meningkatkan kualitas sumber daya yang ada agar mampu memberikan dan mempertahankan hubungan bisnis dengan pelanggan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Our Commitment Section */}
        <div>
          <h2 className="text-2xl font-bold text-center mb-12">Our Commitment</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
              <img src={worldIcon} alt="Global Coverage" className="w-20 h-20 mb-6" />
              <h3 className="font-semibold text-lg">Agen Impor Terbesar di Seluruh Asia</h3>
            </div>
            <div className="flex flex-col items-center text-center p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
              <img src={deliveryIcon} alt="Delivery Coverage" className="w-20 h-20 mb-6" />
              <h3 className="font-semibold text-lg">Pengiriman Ke Seluruh Indonesia</h3>
            </div>
            <div className="flex flex-col items-center text-center p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
              <img src={hoursIcon} alt="24/7 Service" className="w-20 h-20 mb-6" />
              <h3 className="font-semibold text-lg">Layanan Chat dan Konsultasi 24 Jam</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
