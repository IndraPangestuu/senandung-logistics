import React from 'react';

const QuoteAndFAQSection = () => {
  return (
    <section className="bg-gray-200 py-12 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left: Quote Form */}
         <div className="bg-white shadow-lg p-8 rounded-lg">
          <h3 className="text-blue-900 font-bold text-lg mb-1">Know the price</h3>
          <h2 className="text-orange-500 font-extrabold text-2xl mb-6">Get A Free Quote</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="input" />
              <input type="email" placeholder="Email Address" className="input" />
              <input type="tel" placeholder="Phone Number" className="input" />
              <input type="text" placeholder="Subject" className="input" />
              <input type="text" placeholder="Pickup City" className="input" />
              <input type="text" placeholder="Delivery City" className="input" />
              <input type="text" placeholder="Freight type" className="input" />
              <input type="text" placeholder="Incoterms" className="input" />
              <input type="text" placeholder="Width" className="input" />
              <input type="text" placeholder="Height" className="input" />
              <input type="text" placeholder="Length" className="input" />
              <input type="text" placeholder="Weight" className="input" />
            </div>
          </form>
        </div>

        {/* Right: FAQ Section */}
        <div className="text-gray-900">
          <h3 className="font-bold text-lg mb-2">Frequently Asked Questions</h3>
          <h2 className="font-extrabold text-2xl mb-6 text-gray-800">
            Delivering Excellence in <br className="hidden md:block" />
            Logistics
          </h2>
          <ul className="space-y-6 text-base">
            <li><span className="font-bold text-gray-800">1.</span> What types of logistics services do you offer?</li>
            <li><span className="font-bold text-gray-800">2.</span> What are your rates for shipping?</li>
            <li><span className="font-bold text-gray-800">3.</span> How can I track my shipment?</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default QuoteAndFAQSection;
