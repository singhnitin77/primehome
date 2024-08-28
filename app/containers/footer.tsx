import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="bg-[#F1F1F1] text-gray-800 pt-10 pb-5 px-5 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div className="flex flex-col space-y-4">
          <img src="/logo.png" alt="Company Logo" className="w-20 h-20" />
          <p className="text-sm leading-6">
            Prime Home Propmart is one of the fastest growing real estate companies. We offer the best real estate services, aiming to transform the industry by providing top-notch residential, commercial, and industrial properties.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-800 hover:text-blue-500 transition-colors duration-300">
              <FaFacebookF className="w-5 h-5 hover:scale-110 transition-transform duration-300" />
            </a>
            <a href="#" className="text-gray-800 hover:text-pink-500 transition-colors duration-300">
              <FaInstagram className="w-5 h-5 hover:scale-110 transition-transform duration-300" />
            </a>
            <a href="#" className="text-gray-800 hover:text-red-500 transition-colors duration-300">
              <FaYoutube className="w-5 h-5 hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-sm leading-6">
            <strong>Phone:</strong><br />
            +91 99900 67877<br />
            {/* +91 9800500700<br /> */}
            +91 99900 67877<br /><br />
            <strong>Our offices:</strong><br />
            1st Floor, A-4 Omaxe India Trade Centre, Alpha-II, Greater Noida, Uttar Pradesh
          </p>
        </div>

        {/* Schedule a Visit */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Schedule a Visit</h2>
          <div className="space-y-2">
            <p className="text-lg font-semibold text-[#4361EE]">+91 99900 67877</p>
            <p className="text-lg font-semibold text-[#4361EE]">+91 99900 67877</p>
          </div>
          <p className="text-sm mt-4">
            Contact us now for a visit or email us at <br />
            <a href="mailto:promotionoppl@gmail.com" className="text-blue-500 hover:underline">primehomepropmart@gmail.com</a>
          </p>
          <div>
            <div className="mt-4">
              <a href="#_" className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                <span className="relative text-white">Schedule a Visit</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t pt-5 text-center text-gray-600 text-sm">
        <p>© 2024 All Rights Reserved by Prime Home Propmart</p>
        <p className="mt-2">
          <a href="#" className="hover:underline">Sitemap</a> | <a href="#" className="hover:underline">Terms of Service</a> | <a href="#" className="hover:underline">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
}
