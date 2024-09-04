const About = () => {
  return (
    <>
      <div id="about-us" className="px-[25px] md:px-[75px] py-[30px] md:py-[80px]">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-1 justify-center items-start flex-col md:mr-[20px]">
            <h4
              className="text-[16px] lg:text-[20px] text-[#4361EE] font-medium"
              style={{ letterSpacing: "2px" }}
            >
              PRIME HOME PROPMART
            </h4>

            <h1 className="text-[30px] md:text-[40px] lg:text-[48px] leading-[1.1] md:leading-[1.25] font-extrabold text-black">
              Your Trusted Real Estate Partner
            </h1>
            <p className="leading-[1.35] text-[16px] md:text-[16px] lg:text-[18px] text-[#808080] font-regular mt-[20px] mb-[32px]">
              At Prime Home Propmart, we have proudly served Greater Noida&apos;s real estate market for over 10 years, earning a reputation for trust, integrity, and excellence. Our commitment to our clients is the cornerstone of our business, and we believe in building relationships that last. Real estate decisions are among the most significant moments in life, and we are dedicated to guiding and supporting you through every step of the journey.
            </p>
            <p className="leading-[1.35] text-[16px] md:text-[18px] lg:text-[20px] text-[#808080] font-regular mt-[20px] mb-[32px]">
              Our approach is centered on your satisfaction, which isn&apos;t just a goal for us—it&apos;s the driving force behind everything we do. We believe in open and clear communication, providing you with a comprehensive understanding of every detail involved in your real estate transactions.
            </p>

          </div>
          <div className=" flex flex-1 items-center justify-center">
            <img
              src="/assets/trustedPartner.png"
              alt="Banner"
              data-depth="0.3"
              className="h-auto w-[100%]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
