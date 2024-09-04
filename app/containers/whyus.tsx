import React from 'react';
import parse from 'html-react-parser';

const WhyUs = () => {
  const data = [
    {
      icon: '🏆',
      bg: '#E1F0DA',
      title: 'Over 25 Years of Experience',
      description:
        `At Prime Home Propmart, we&rsquo;ve been helping people in Greater Noida find their dream homes for over 25 years. Your goals become our mission, and your dreams are our motivation.`,
    },
    {
      icon: '📍',
      bg: '#F1EAFF',
      title: 'Trusted Local Expertise',
      description:
        'As a reliable local agency, we offer more than just properties; we provide peace of mind. We take care of every detail, from paperwork to legal intricacies, with utmost precision.',
    },
    {
      icon: '🔍',
      bg: '#FFD1DA',
      title: 'Honest & Transparent Guidance',
      description:
        'We believe in honesty, clarity, and empathy in every interaction. Our experience in navigating the real estate process ensures that you feel informed, respected, and confident.',
    },
    {
      icon: '🤝',
      bg: '#F1F1F1',
      title: 'Client Satisfaction & Well-being',
      description:
        'Our clients trust us because we truly care about their satisfaction. As one client said, &quot;Prime Home Propmart isn&rsquo;t just about selling properties; they care about your happiness, both financially and personally.&quot;',
    },
  ];


  return (
    <div id='why-us' className="px-[25px] md:px-[75px] py-[30px] md:py-[60px]">
      <h2 className="text-[30px] md:text-[40px] lg:text-[48px] leading-[1.1] md:leading-[1.25] text-black font-bold text-center mb-8">
        Why should you trust Us!
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: item.bg
            }}
            className=" p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105 cursor-pointer"
          >
            <div className="text-3xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
            {parse(`<p className="text-gray-700">${item.description} </p>`)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;

