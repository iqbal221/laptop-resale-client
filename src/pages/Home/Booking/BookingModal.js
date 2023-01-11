import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Context/AuthProvider";
import { useNavigate } from "react-router-dom";

const BookingModal = ({ data }) => {
  const { product, resalePrice, image } = data;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleBooking = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const product = form.product.value;
    const price = form.price.value;
    const phone = form.phone.value;
    const meet = form.meet.value;

    // console.log(name, email, product, price, phone, meet);

    const bookingInfo = {
      name,
      email,
      product,
      price,
      phone,
      meet,
      image: image,
    };

    // bookings save to database
    fetch("https://laptop-sells-server.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          toast.success("Booking successfully");
          navigate("/dashboard");
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form className="md:px-6 px-1" onSubmit={handleBooking}>
            <div className="form-control w-full mb-3">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                defaultValue={user?.displayName}
                disabled
                name="name"
                type="text"
                className="input input-bordered input-neutral w-full"
              />
            </div>
            <div className="form-control w-full mb-3">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                defaultValue={user?.email}
                disabled
                name="email"
                type="email"
                className="input input-bordered input-neutral w-full"
              />
            </div>
            <div className="form-control w-full mb-3">
              <label className="label">
                <span className="label-text">Product</span>
              </label>
              <input
                defaultValue={product}
                disabled
                name="product"
                type="text"
                className="input input-bordered input-neutral w-full"
              />
            </div>
            <div className="form-control w-full mb-3">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                defaultValue={resalePrice}
                disabled
                name="price"
                type="text"
                className="input input-bordered input-neutral w-full"
              />
            </div>
            <div className="form-control w-full mb-3">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                name="phone"
                type="text"
                className="input input-bordered input-neutral w-full"
              />
            </div>
            <div className="form-control w-full mb-3">
              <label className="label">
                <span className="label-text">Meeting Location</span>
              </label>
              <input
                name="meet"
                type="text"
                className="input input-bordered input-neutral w-full"
              />
            </div>
            <input
              className="btn btn-warning  w-full mt-3"
              type="submit"
              value="Booking Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
