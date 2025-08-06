import React, { useState } from "react";

const HelpSupport = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const faqs = [
    {
      question: "How can I track my order?",
      answer: "You can track your order from the 'Track Order' option in your profile section."
    },
    {
      question: "How do I return an item?",
      answer: "Go to 'Returns & Refunds' in your profile and initiate the return process."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept UPI, Credit/Debit Cards, Net Banking, and Cash on Delivery."
    }
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent! (Mock Submit)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Help & Support</h2>

      {/* FAQ Section */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <p className="font-medium">{faq.question}</p>
            <p className="text-gray-600 text-sm">{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* Contact Us Form */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Your Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full border border-gray-300 rounded px-3 py-2"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#4A5A2A] text-white py-2 rounded text-sm"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default HelpSupport;
