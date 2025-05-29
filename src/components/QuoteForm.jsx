import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import emailjs from 'emailjs-com';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    pickupCity: '',
    deliveryCity: '',
    freightType: '',
    incoterms: '',
    width: '',
    height: '',
    length: '',
    weight: ''
  });
  const [openIndex, setOpenIndex] = useState(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      setError('Please fill in all required fields: Name, Email, and Phone.');
      return false;
    }
    // Basic email regex
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSending(true);
    const serviceID = 'your_service_id';
    const templateID = 'your_template_id';
    const userID = 'your_user_id';

    emailjs.send(serviceID, templateID, formData, userID)
      .then(() => {
        setSending(false);
        setSent(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          pickupCity: '',
          deliveryCity: '',
          freightType: '',
          incoterms: '',
          width: '',
          height: '',
          length: '',
          weight: ''
        });
      })
      .catch(() => {
        setSending(false);
        setError('Failed to send the message. Please try again later.');
      });
  };

  return (
    <section className="bg-gray-200 py-12 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left: Form */}
        <motion.div 
          className="bg-white shadow-lg p-8 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-blue-900 font-bold text-lg mb-1">Know the price</h3>
          <h2 className="text-orange-500 font-extrabold text-2xl mb-6">Get A Free Quote</h2>
          <form className="grid md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-4 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-4 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-4 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-4 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              name="pickupCity"
              placeholder="Pickup City"
              value={formData.pickupCity}
              onChange={handleChange}
              className="w-full px-4 py-4 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              name="deliveryCity"
              placeholder="Delivery City"
              value={formData.deliveryCity}
              onChange={handleChange}
              className="w-full px-4 py-4 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              name="freightType"
              placeholder="Freight type"
              value={formData.freightType}
              onChange={handleChange}
              className="w-full px-4 py-4 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              name="incoterms"
              placeholder="Incoterms"
              value={formData.incoterms}
              onChange={handleChange}
              className="w-full px-4 py-4 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              name="width"
              placeholder="Width"
              value={formData.width}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              name="height"
              placeholder="Height"
              value={formData.height}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              name="length"
              placeholder="Length"
              value={formData.length}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              name="weight"
              placeholder="Weight"
              value={formData.weight}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              disabled={sending}
              className="md:col-span-2 bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-600 transition-all disabled:opacity-50"
            >
              {sending ? 'Sending...' : 'Submit'}
            </button>
          </form>
          {error && <p className="text-red-600 mt-4">{error}</p>}
          {sent && <p className="text-green-600 mt-4">Message sent successfully!</p>}
        </motion.div>

        {/* Right: FAQ Accordion */}
        <motion.div 
          className="bg-white shadow-lg p-8 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-bold text-lg text-blue-900 mb-1">Frequently Asked Questions</h3>
          <h2 className="font-extrabold text-2xl mb-6 text-orange-500">
            Delivering Excellence in <br className="hidden md:block" />
            Logistics
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-100 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between w-full items-center text-left text-base font-medium text-gray-800 p-4"
                >
                  {faq.question}
                  {openIndex === index ? <ChevronUp className="w-5 h-5 " /> : <ChevronDown className="w-5 h-5 " />}
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.p
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: 'auto' },
                        collapsed: { opacity: 0, height: 0 }
                      }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="px-4 pb-4 text-gray-700 text-sm"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteForm;
