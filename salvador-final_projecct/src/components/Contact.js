import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please enter your name");
    } else {
      alert("Form submitted!");
    }
  };

  return (
    <section className="my-12">
      <h2 className="text-3xl font-semibold text-blue-600">Contact</h2>
      
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border p-2 mr-2"
          onChange={(e) => setName(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;