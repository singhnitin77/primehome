
'use client';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

export default function CTA() {

  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);


  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // Convert FormData to URLSearchParams
    const data = new URLSearchParams();
    formData.forEach((value, key) => {
      data.append(key, value.toString());
    });

    await fetch('/__forms.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: data.toString()
    });

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data.toString(),
      });

      if (response.ok) {
        setStatus('Your message has been sent successfully!');
        // toast.success('Your message has been sent successfully!')
        console.log('submitted');

        setError(null);
      } else {
        // throw new Error('Failed to send your message. Please try again later.');
        // toast.error('Failed to send your message. Please try again later.')
        console.log('failed');

      }
    } catch (error) {
      setStatus(null);
      // setError(error && error.message);
    }
  };

  return (
    <div className="py-24 bg-white" id="cta">
      <div className="mx-auto px-5 md:px-[100px]">
        <div className="text-center">
          <h1 className="text-[24px] md:text-[36px] lg:text-[48px] leading-[1.1] md:leading-[1.25] font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
            Find Your Dream Home with Us!
          </h1>
        </div>

        <div className="mt-12 bg-gradient-to-r from-purple-500 to-orange-500 rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="p-10 text-white">
            <h2 className="text-4xl font-bold mb-3">Ready to Make a Move?</h2>
            <p className="text-lg mb-7">
              Whether you&apos;re buying your first home or looking for an investment property, we&apos;re here to help you every step of the way. Get in touch with us to start your journey to finding the perfect property.
            </p>


            <form
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              // action="https://formsubmit.co/omshreetraders07@gmail.com"
              data-netlify="true"
              name="contact"
              onSubmit={handleFormSubmit}
              action='077605ee9ba760556b3b63ba30cf4fbd'
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Nitin Singh"
                  name="name"
                  required
                  className="w-full p-3 text-gray-900 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="me@gmail.com"
                  name="email"
                  required
                  className="w-full p-3 text-gray-900 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-300"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <input
                  id="message"
                  type="text"
                  placeholder="Tell us about your ideal property"
                  name="Message"
                  className="w-full p-3 text-gray-900 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-300"
                />
              </div>

              <button type='submit' className="btn--form sm:col-span-2 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Get in Touch
              </button>
            </form>
          </div>

          <div className="flex justify-center items-center">
            <img src="/assets/ctaImage.png" alt="Image for CTA Section" className="w-5/5 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
