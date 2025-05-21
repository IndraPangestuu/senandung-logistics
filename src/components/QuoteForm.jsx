import React from 'react';

const QuoteForm = () => {
  return (
    <section className="bg-gray-200 py-12 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        <div className="bg-white shadow-lg p-8 rounded-lg">
          <h3 className="text-blue-900 font-bold text-lg mb-1">Know the price</h3>
          <h2 className="text-orange-500 font-extrabold text-2xl mb-6">Get A Free Quote</h2>
        <form className="grid md:grid-cols-2 gap-6">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full px-4 py-4 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" />
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" />
          <input 
            type="tel" 
            placeholder="Phone Number" 
            className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" />
          <input 
            type="text" 
            placeholder="Subject" 
            className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" />
          <input 
            type="text" 
            placeholder="Pickup City" 
            className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" />
          <input 
            type="text" 
            placeholder="Delivery City" 
            className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" />
          <input 
            type="text" 
            placeholder="Freight type" 
            className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" />
          <input 
            type="text" 
            placeholder="Incoterms" 
            className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" />
        </form>
        <form className="w-full py-6 mx-auto grid md:grid-cols-4 gap-3">
          <input 
            type="text" 
            placeholder="Width" 
            className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" />
          <input 
            type="text" 
            placeholder="Height" 
            className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" />
          <input 
            type="text" 
            placeholder="Length" 
            className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" />
          <input 
            type="text" 
            placeholder="Weight" 
            className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </form>
          <button
            type="submit"
            className="md:col-span-2 bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-600 transition-all"
          > Submit
          </button>
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

export default QuoteForm;
