import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Apa saja layanan yang ditawarkan?",
    answer: "Kami menawarkan layanan pengiriman barang darat, laut, dan udara ke seluruh Indonesia dan mancanegara."
  },
  {
    question: "Bagaimana cara memesan layanan?",
    answer: "Anda bisa menghubungi kami melalui form kontak, email, atau WhatsApp yang tersedia di halaman website ini."
  },
  {
    question: "Apakah layanan tersedia 24 jam?",
    answer: "Ya, kami melayani pengiriman dan dukungan pelanggan 24/7 untuk memastikan kelancaran pengiriman Anda."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-20 px-4 md:px-10 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-5 rounded-xl shadow">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between w-full items-center text-left text-lg font-medium text-gray-800"
              >
                {faq.question}
                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openIndex === index && (
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
