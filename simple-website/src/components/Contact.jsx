import React, { useState } from "react";

const Contact= () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with API logic or EmailJS/Formspree integration
    console.log("Form Submitted:", formData);
    alert("Thank you for contacting us!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24 text-gray-800">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center text-blue-700">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Have a question, feedback, or just want to say hello? We'd love to
          hear from you.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-blue-50 p-8 rounded-xl shadow-lg"
        >
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-semibold">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
