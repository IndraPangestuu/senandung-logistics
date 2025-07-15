import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer, index, isOpen, onClick }) => (
  <motion.div
    layout
    className="border-b border-white/20 pb-4"
  >
    <button
      onClick={() => onClick(index)}
      className="w-full text-left text-white font-bold text-sm md:text-base focus:outline-none flex justify-between items-center"
    >
      {question}
      <motion.span
        className="ml-2 text-white text-xl"
        animate={{ rotate: isOpen ? 360 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isOpen ? '−' : '+'}
      </motion.span>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="answer"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <p className="mt-2 text-gray-100 text-lg font-light transition-all pl-5">
            {answer}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const Section3 = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  const faqs = [
    {
      question: '1. What types of logistics services do you offer?',
      answer: 'We offer air freight, sea freight, and door-to-door logistics services tailored to your needs.',
    },
    {
      question: '2. What are your rates for shipping?',
      answer: 'Shipping rates vary depending on destination, weight, and shipping method. Request a quote for accurate pricing.',
    },
    {
      question: '3. How can I track my shipment?',
      answer: 'You can track your shipment using the tracking number provided via our online tracking portal.',
    },
  ];

  return (
    <section className="bg-[#b5b2b1] font-roboto mt-20">
      <div className='container flex flex-col lg:flex-row items-start justify-between px-4 py-15 bg-[#b5b2b1] font-roboto max-w-auto mx-auto gap-12'>
        {/* Form Section */}
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-xl w-full lg:w-1/2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2}}
        >
          <p className="text-lg font-semibold text-gray-800">
            <span className="text-blue-900">Know the price</span>
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-6">Get A Free Quote</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['Your Name', 'Email Address', 'Phone Number', 'Subject', 'Pickup City', 'Delivery City', 'Freight type', 'Incoterms'].map((ph, i) => (
              <input
                key={i}
                type="text"
                placeholder={ph}
                className="input-field transition-all duration-200 border border-gray-400 rounded-md focus:border-amber-500 focus:outline-none p-2"
              />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 py-4">
            {['Width', 'Height', 'Length', 'Weight'].map((ph, i) => (
              <input
                key={i}
                type="text"
                placeholder={ph}
                className="input-field transition-all duration-200 border border-gray-400 rounded-md focus:border-amber-500 focus:outline-none p-2"
              />
            ))}
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="md:col-span-2 bg-orange-500 text-white font-bold py-4 px-8 rounded-lg hover:bg-orange-600 transition-all w-full"
          >
            Send Message
          </motion.button>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
        className="w-full max-w-full lg:w-1/2 px-4 box-border"
        initial={{ opacity: 0, x: 0 }} // Hindari efek geser horizontal yang bisa sebabkan overflow
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h3 className="text-base md:text-lg font-medium text-black">Frequently Asked Questions</h3>
        <h2 className="text-xl md:text-3xl font-bold text-gray-100 mt-2 mb-6">
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
      </motion.div>
      </div>
    </section>
  );
};

export default Section3;