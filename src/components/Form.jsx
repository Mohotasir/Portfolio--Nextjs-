import React from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

export default function Form() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        emailjs
          .sendForm('service_ngpgcan', 'template_uoisbbq', form , '5hR4F0LdR7okpu9VH')
          .then(
            () => {
                Swal.fire({
                    title: "Success!",
                    text: "Email sent successfully!",
                    icon: "success"
                  });
            },
            (error) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: error.text
                  });
            },
          );

        form.reset(); // Optional: Reset the form after submission
    };

    return (
      <form onSubmit={handleSubmit} className="bg-black space-y-6 shadow my-8 p-8 rounded-lg w-full max-w-md z-10 border-gray-700 border">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-500">Name</label>
          <div className="mt-1">
            <input
              type="text"
              placeholder="Enter name here.."
              id="name"
              name="name"
              className="block bg-black border-none shadow w-full px-3 py-3 border rounded-md focus:outline-none sm:text-sm"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-500">Email</label>
          <div className="mt-1">
            <input
              type="email"
              placeholder="Enter email here.."
              id="email"
              name="email"
              className="block bg-black border-none shadow w-full px-3 py-3 border rounded-md focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label htmlFor="project" className="block text-sm font-medium text-gray-500">Project</label>
          <div className="mt-1">
            <textarea
              id="message"
              placeholder="Write message.."
              name="message"
              rows="4"
              className="block bg-black border-none shadow w-full px-3 py-2 border rounded-md focus:outline-none"
            ></textarea>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium bg-purple-900"
          >
            Send me
            <span className="ml-2 text-xl">✈️</span>
          </button>
        </div>
      </form>
    );
}
