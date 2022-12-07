import React from "react";
import image from "../../../Assets/images/banner.jpg";

const Banner = () => {
  return (
    <div className="hero md:pt-20 mt-6">
      <div className="hero-content  grid md:grid-cols-2 grid-cols-1">
        <div>
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold leading-snug">
            Really Fantastic and <br></br>Valuable !!
          </h1>
          <p className="py-6">
            A laptop is a computer which is easy to carry around. A modern
            laptop is self-contained, with a screen, keyboard and pointing
            device, plus usually, speakers, a microphone and a camera.
          </p>
          <button className="btn btn-warning">Get Started</button>
        </div>
        <img
          src={image}
          className=" rounded-lg w-[1200px] md:pt-0 pt-6 mx-auto"
          alt="..."
        />
      </div>
    </div>
  );
};

export default Banner;
