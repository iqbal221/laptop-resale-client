import React from "react";

const DiscountOffer = () => {
  return (
    <div className="mt-24">
      <div className="card md:card-side bg-base-100 hover:shadow-indigo-500/50 shadow-lg cursor-pointer">
        <div className="md:w-1/3 w-full bg-black flex justify-center items-center  ">
          <div className="md:p-0 p-10">
            <p className="text-white text-md italic">Amazing offer</p>
            <h2 className="text-xl text-white mt-2">Let's Start to buy.....</h2>
            <h1 className="text-warning text-4xl mt-1 flex items-center ">
              Discount <span className="text-pink-400 text-5xl ml-2">30%</span>
            </h1>
          </div>
        </div>

        <div className="card-body md:w-2/3  ">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="mx-auto">
              <img
                className="w-64 h-40"
                src="https://m.media-amazon.com/images/I/71-QYvMpwGL._AC_UY218_.jpg"
                alt=""
              />
              <h3 className="text-center text-primary mt-2">
                2022 Acer HD Chromebook
              </h3>
              <div className="flex justify-end text-center">
                <p className="text-lg">Original: $160</p>
                <p className="text-lg font-semibold">New: $112</p>
              </div>
            </div>

            <div className="mx-auto">
              <img
                className="w-64 h-40"
                src="https://m.media-amazon.com/images/I/71CR6drcruL._AC_UY218_.jpg"
                alt=""
              />
              <h3 className="text-center text-primary mt-2">
                ASUS VivoBook 14 Laptop
              </h3>
              <div className="flex justify-end text-center">
                <p className="text-lg">Original: $280</p>
                <p className="text-lg font-semibold">New: $196</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountOffer;
