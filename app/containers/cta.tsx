import React from 'react';

export default function CTA() {
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
              Whether you're buying your first home or looking for an investment property, we're here to help you every step of the way. Get in touch with us to start your journey to finding the perfect property.
            </p>

            <form
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              action="https://formsubmit.co/omshreetraders07@gmail.com"
              method="POST"
            >
              <div>
                <label htmlFor="full-name" className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  id="full-name"
                  type="text"
                  placeholder="Nitin Singh"
                  name="full-name"
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

              <button className="btn--form sm:col-span-2 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">
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
