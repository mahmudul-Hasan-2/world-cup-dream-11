import React from "react";

const Footer = () => {
  return (
    <div className="mt-50 px-2 md:px-36 bg-[#06091A] py-10  w-full">
      <div className="bg-white/15 px-4 py-6 sm:p-6 rounded-3xl border border-white relative -top-80 mt-30">
        <div
          className="space-y-6 rounded-3xl flex items-center justify-center text-center flex-col py-24"
          id="newsletter"
        >
          <div className="space-y-4">
            <h2 className="text-xl sm:text-3xl font-bold text-[#131313]">
              Subscribe to our Newsletter
            </h2>
            <p className="text-base max-w-2xs sm:text-[20px] text-[#13131370]">
              Get the latest updates and news right in your inbox!
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <input
              type="text"
              name=""
              id=""
              className="border border-[#13131315] py-4.5 px-4 rounded-2xl w-[90%] md:w-100 "
              placeholder="Enter your email"
            />
            <button className="cursor-pointer bg-gradient-to-r from-pink-400 via-orange-300 to-yellow-400 font-bold py-3 px-8 rounded-xl shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
