import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer land, sea, and air freight services across Indonesia and internationally."
  },
  {
    question: "How can I order your services?",
    answer: "You can contact us through the contact form, email, or WhatsApp provided on this website."
  },
  {
    question: "Are your services available 24/7?",
    answer: "Yes, we provide shipping services and customer support 24/7 to ensure smooth deliveries."
  }
];

const QuoteForm = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-200 py-12 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left: Form */}
        <div className="bg-white shadow-lg p-8 rounded-lg">
          <h3 className="text-blue-900 font-bold text-lg mb-1">Know the price</h3>
          <h2 className="text-orange-500 font-extrabold text-2xl mb-6">Get A Free Quote</h2>
          <form className="grid md:grid-cols-2 gap-6">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-4 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            <input type="email" placeholder="Email Address" className="w-full px-4 py-4 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            <input type="tel" placeholder="Phone Number" className="w-full px-4 py-4 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            <input type="text" placeholder="Subject" className="w-full px-4 py-4 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            <input type="text" placeholder="Pickup City" className="w-full px-4 py-4 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            <input type="text" placeholder="Delivery City" className="w-full px-4 py-4 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            <input type="text" placeholder="Freight type" className="w-full px-4 py-4 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            <input type="text" placeholder="Incoterms" className="w-full px-4 py-4 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </form>
          <form className="w-full py-6 mx-auto grid md:grid-cols-4 gap-3">
            <input type="text" placeholder="Width" className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            <input type="text" placeholder="Height" className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            <input type="text" placeholder="Length" className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            <input type="text" placeholder="Weight" className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </form>
          <button type="submit" className="md:col-span-2 bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-600 transition-all">
            Submit
          </button>
        </div>

        {/* Right: FAQ Accordion */}
        <div className="bg-white shadow-lg p-8 rounded-lg">
          <h3 className="font-bold text-lg text-blue-900 mb-1">Frequently Asked Questions</h3>
          <h2 className="font-extrabold text-2xl mb-6 text-orange-500">
            Delivering Excellence in <br className="hidden md:block" />
            Logistics
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between w-full items-center text-left text-base font-medium text-gray-800"
                >
                  {faq.question}
                  {openIndex === index ? <ChevronUp className="w-5 h-5 " /> : <ChevronDown className="w-5 h-5 " />}
                </button>
                {openIndex === index && (
                  <p className="mt-2 text-gray-700 text-sm text-left">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
