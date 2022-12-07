import React from "react";
import { useLoaderData } from "react-router-dom";

import BookingModal from "../Booking/BookingModal";

const WishlistSpecial = () => {
  const wishlistProducts = useLoaderData();
  const { image, product, resalePrice, condition } = wishlistProducts;

  return (
    <div className="lg:px-24 md:px-10 px-3 mt-24">
      <h2 className="text-3xl text-center text-pink-500">
        Welcome To Wishlist
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1 mx-auto mt-14 ">
        <div className="md:w-[520px] md:pl-3 pl-0 w-full card md:card-side bg-base-100 shadow-xl md:p-2">
          <figure>
            <img src={image} alt="Movie" className="w-[260px]" />
          </figure>
          <div className="card-body ">
            <h2 className="text-lg text-primary p-0 m-0">{product}</h2>
            <p className="text-md p-0 m-0">Price: {resalePrice}</p>
            <p className="text-md p-0 m-0">Condition: {condition}</p>
            <div>
              <label htmlFor="booking-modal" className="btn btn-warning">
                Book Now
              </label>
              <BookingModal data={wishlistProducts}></BookingModal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistSpecial;
