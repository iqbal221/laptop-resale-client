import React from "react";
import image from "../../Assets/images/404.webp";

const NotFound = () => {
  return (
    <div className="mt-40 text-center">
      <h1 className="text-4xl  text-error ">Oppsss......</h1>
      <img className="w-96 mx-auto mt-6" src={image} alt="" />
      <h1 className="text-center text-primary text-5xl mt-10">
        Not Found !!!!
      </h1>
    </div>
  );
};

export default NotFound;
