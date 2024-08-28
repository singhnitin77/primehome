'use client';
import React, { useState, useEffect } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const testimonials = [
    {
      id: 1,
      name: 'Dianne Russell',
      position: 'Manager Director',
      review:
        'Best! I got the house I wanted through Hounter. Through this website, I can get a house with the type and specifications I want very easily',
      rating: 4.6,
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      id: 2,
      name: 'Esther Howard',
      position: 'Head of Marketing',
      review:
        'Through Hounter, I can get information about the house we wanted very quickly and directly from the owner. It was very helpful.',
      rating: 4.8,
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
    {
      id: 3,
      name: 'Jane Cooper',
      position: 'Sales Manager',
      review:
        'Fast! I was able to sell my house quickly through Hounter by immediately setting up my house. I also got a good discount from the platform.',
      rating: 4.3,
      avatar: 'https://randomuser.me/api/portraits/women/25.jpg',
    },
  ];

  const length = testimonials.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 10000); // Change every 10 seconds
    return () => clearInterval(interval);
  }, [current, length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(testimonials) || testimonials.length <= 0) {
    return null;
  }

  return (
    <div
      className="relative py-20 min-h-[70vh]"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white">
        <h4
          className="text-[14px] lg:text-[20px] text-[#fff] font-medium"
          style={{ letterSpacing: '2px' }}
        >
          TESTIMONIALS
        </h4>
        <h2 className="text-[24px] md:text-[36px] lg:text-[48px] leading-[1.1] md:leading-[1.25] font-bold mb-10">
          Look What Our Clients Say!
        </h2>
        <div className="max-w-4xl mx-auto px-4 relative">
          <FaChevronLeft
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-xl md:text-2xl lg:text-3xl"
            style={{ left: '-2.5rem' }} // Move the left arrow further from the card
          />
          <FaChevronRight
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-xl md:text-2xl lg:text-3xl"
            style={{ right: '-2.5rem' }} // Move the right arrow further from the card
          />
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={
                index === current
                  ? 'opacity-100 transition-opacity duration-1000 ease-in-out'
                  : 'opacity-0'
              }
              style={{
                // height: '100px', 
              }}
            >
              {index === current && (
                <div className="bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-lg shadow-lg h-full flex flex-col justify-center">
                  <p className="text-base md:text-lg lg:text-xl mb-4">
                    "{testimonial.review}"
                  </p>
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-4"
                      />
                      <div className="text-left">
                        <p className="font-semibold text-sm md:text-base">
                          {testimonial.name}
                        </p>
                        <p className="text-xs md:text-sm text-gray-300">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center items-center mt-4">
                      <FaStar className="text-yellow-400 text-sm md:text-base" />
                      <p className="ml-2 text-sm md:text-lg lg:text-xl">
                        {testimonial.rating}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
