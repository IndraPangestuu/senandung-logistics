import React, { useState } from 'react';

const FAQItem = ({ question, answer, index, isOpen, onClick }) => (
  <div className="border-b border-white/20 pb-6">
    <button
      onClick={() => onClick(index)}
      className="w-full text-left text-white font-bold text-sm md:text-base focus:outline-none flex justify-between items-center"
    >
      {question}
      <span className="ml-2 text-white text-xl">{isOpen ? '−' : '+'}</span>
    </button>
    {isOpen && (
      <p className="mt-2 text-gray-100 text-lg font-light hover:text-white hover:font-bold transition-all duration-300">
        {answer}
      </p>
    )}
  </div>
);

const Section3 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: '1. What types of logistics services do you offer?',
      answer:
        'We offer air freight, sea freight, and door-to-door logistics services tailored to your needs.',
    },
    {
      question: '2. What are your rates for shipping?',
      answer:
        'Shipping rates vary depending on destination, weight, and shipping method. Request a quote for accurate pricing.',
    },
    {
      question: '3. How can I track my shipment?',
      answer:
        'You can track your shipment using the tracking number provided via our online tracking portal.',
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-start justify-between px-4 py-16 bg-[#b5b2b1] font-roboto max-w-auto mx-auto gap-12">
      {/* Form Section */}
      <div className="bg-white rounded-xl p-8 shadow-md w-full lg:w-1/2">
        <p className="text-lg font-semibold text-gray-800">
          <span className="text-blue-900">Know the price</span>
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-6">Get A Free Quote</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Your Name" className="input-field" />
          <input type="email" placeholder="Email Address" className="input-field" />
          <input type="text" placeholder="Phone Number" className="input-field" />
          <input type="text" placeholder="Subject" className="input-field" />
          <input type="text" placeholder="Pickup City" className="input-field" />
          <input type="text" placeholder="Delivery City" className="input-field" />
          <input type="text" placeholder="Freight type" className="input-field" />
          <input type="text" placeholder="Incoterms" className="input-field" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 py-4">
          <input type="text" placeholder="Width" className="input-field2" />
          <input type="text" placeholder="Height" className="input-field2" />
          <input type="text" placeholder="Length" className="input-field2" />
          <input type="text" placeholder="Weight" className="input-field2" />
        </div>
        <button
          type="submit"
          className="md:col-span-2 bg-orange-500 text-white font-bold py-4 px-8 rounded-lg hover:bg-orange-600 transition-all"
        >
          Send Message
        </button>
      </div>

      {/* FAQ Section */}
      <div className="w-full lg:w-1/2">
        <h3 className="text-lg font-medium text-black">Frequently Asked Questions</h3>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mt-2 mb-6">
          Delivering Excellence in Logistics
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              index={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === idx}
              onClick={toggleFAQ}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;
