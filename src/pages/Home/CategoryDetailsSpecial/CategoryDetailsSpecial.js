import React from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../Booking/BookingModal";
import { MdVerifiedUser } from "react-icons/md";

const CategoryDetailsSpecial = () => {
  const data = useLoaderData();

  const {
    image,
    resalePrice,
    originalPrice,
    year,
    product,
    category,
    location,
    seller,
    purchaseYear,
    condition,
    phone,
  } = data;

  return (
    <div className="md:flex flex-column  lg:px-24 md:px-3 px-3 lg:mt-20 md:mt-14 mt-8 mx-auto">
      <div className="card bg-base-100 shadow-lg hover:shadow-indigo-500/50 md:w-1/3 w-full p-4 md:mx-3 mx-0">
        <figure>
          <img src={image} alt="Shoes" className="pt-14 " />
        </figure>
      </div>
      <div className="card w bg-base-100 shadow-lg md:w-2/3 w-full md:mx-4 mx-0 lg:px-14 md:px-6 md:mt-0 mt-10">
        <div className="card-body">
          <h2 className="text-center card-title text-gray text-3xl mb-4">
            Category: <span className="text-warning">{category}</span>
          </h2>
          <h2 className="card-title text-lg">
            Product:<span className="text-primary text-bold">{product}</span>{" "}
          </h2>
          <div className="flex">
            <div>
              <p>
                <span className="font-semibold">Original Price:</span> $
                {originalPrice}
              </p>
              <p>
                <span className="font-semibold">Resale Price:</span> $
                {resalePrice}
              </p>
              <p>
                <span className="font-semibold">Purchase Year:</span>{" "}
                {purchaseYear}
              </p>
            </div>
            <div className="ml-5">
              <p>
                <span className="font-semibold">Years of use:</span> {year}
              </p>
              <p>
                <span className="font-semibold">Condition:</span> {condition}
              </p>
              <p>
                <span className="font-semibold">Location:</span> {location}
              </p>
            </div>
          </div>

          <p className="my-3 ">
            <div className="flex items-center">
              <span className="font-semibold mr-2">Seller Name:</span> {seller}
              <MdVerifiedUser className=" text-success text-3xl ml-3" />
            </div>
            <span className="font-semibold">Phone:</span> {phone}
          </p>

          <div>
            <label htmlFor="booking-modal" className="btn btn-warning">
              Book Now
            </label>
            <BookingModal data={data}></BookingModal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetailsSpecial;
