import React from "react";
import bannerLogo from "../../../assets/banner_logo.png";

const Banner = ({ selectedType }) => {
  return (
    <div
      className="space-y-6 my-6 px-2.5 py-16 text-center text-white flex items-center justify-center flex-col rounded-3xl max-w-[1400px] w-[97%] md:w-[90%] lg:w-[80%] mx-auto"
      id="banner"
    >
      <div>
        <img src={bannerLogo} alt="" className="w-40 sm:w-50" />
      </div>
      <div className="space-y-4">
        <h1 className="text-lg md:text-2xl lg:text-4xl font-bold">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text-white/70">Beyond Boundaries Beyond Limits</p>
      </div>
      <div>
        <div
          className={`p-2 border ${selectedType === "available" ? "border-[#E7FE29]" : "border-[#fff]"} rounded-2xl bg-white/5`}
        >
          <button
            className={`py-3.5 px-5 ${selectedType === "available" && "bg-[#E7FE29]"} ${selectedType === "selected" && "bg-gradient-to-r from-[#BE62AC] via-[#F9A060] to-[#E8D45A]"} text-black rounded-xl font-bold cursor-pointer`}
          >
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
