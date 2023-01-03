import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const hostingImage = process.env.REACT_APP_IMGBB_KEY;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddProduct = (data) => {
    const image = data.image[0];
    console.log(image);
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${hostingImage}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          console.log(imageData.data.url);
          const productInfo = {
            email: user?.email,
            product: data.product,
            seller: data.seller,
            resalePrice: data.resalePrice,
            originalPrice: data.originalPrice,
            condition: data.condition,
            phone: data.phone,
            location: data.location,
            category: data.category,
            year: data.year,
            purchaseYear: data.purchaseYear,
            description: data.description,
            image: imageData.data.url,
            buttonText: "Advertised",
          };

          fetch("http://localhost:5000/addProduct", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(productInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.acknowledged) {
                toast.success("Added Product successfully");
                navigate("/dashboard/myProduct");
              } else {
                toast.error(data.message);
              }
            });
        }
      });
  };

  return (
    <div className="mt-4 mb-20">
      <h1 className="text-2xl font-bold text-center">Add Product</h1>
      <div className=" w-[500px] mx-auto shadow-xl p-8 ">
        <form onSubmit={handleSubmit(handleAddProduct)}>
          <div className="w-full flex">
            <div className="form-control w-1/2 mt-2 mr-2">
              <label className="label">
                <span className="label-text">Product</span>
              </label>
              <input
                name="product"
                type="text"
                className="input input-bordered input-default w-full "
                {...register("product")}
              />
            </div>
            <div className="form-control w-1/2 mt-2 ml-1">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                defaultValue={user?.displayName}
                name="seller"
                type="text"
                className="input input-bordered input-default w-full "
                {...register("seller")}
              />
            </div>
          </div>

          <div className="w-full flex">
            <div className="form-control w-1/2 mt-2 mr-2">
              <label className="label">
                <span className="label-text">Resale Price</span>
              </label>
              <input
                name="resalePrice"
                type="text"
                className="input input-bordered input-neutral w-full "
                {...register("resalePrice")}
              />
            </div>
            <div className="form-control w-1/2 mt-2 ml-1">
              <label className="label">
                <span className="label-text">Original Price</span>
              </label>
              <input
                name="originalPrice"
                type="text"
                className="input input-bordered input-neutral w-full "
                {...register("originalPrice")}
              />
            </div>
          </div>

          <div className="w-full flex">
            <div className="form-control w-1/2 mt-2 mr-2">
              <label className="label">
                <span className="label-text">Condition</span>
              </label>

              <select
                name="condition"
                type="text"
                {...register("condition")}
                className="select select-bordered w-full "
              >
                <option>Excellent</option>
                <option>Good</option>
                <option>Fair</option>
              </select>
            </div>
            <div className="form-control w-1/2 mt-2 ml-1">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                name="location"
                type="text"
                className="input input-bordered input-neutral w-full "
                {...register("location")}
              />
            </div>
          </div>

          <div className="w-full flex">
            <div className="form-control w-1/2 mt-2 mr-2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                name="category"
                type="text"
                className="input input-bordered input-neutral w-full "
                {...register("category")}
              />
            </div>
            <div className="form-control w-1/2 mt-2 ml-1">
              <label className="label">
                <span className="label-text">Mobile</span>
              </label>
              <input
                name="phone"
                type="text"
                className="input input-bordered input-neutral w-full "
                {...register("phone")}
              />
            </div>
          </div>
          <div className="w-full flex">
            <div className="form-control w-1/2 mt-2 mr-2">
              <label className="label">
                <span className="label-text">Year of Use</span>
              </label>
              <input
                name="year"
                type="text"
                className="input input-bordered input-neutral w-full "
                {...register("year")}
              />
            </div>
            <div className="form-control w-1/2 mt-2 ml-1">
              <label className="label">
                <span className="label-text">Purchase Year</span>
              </label>
              <input
                name="purchaseYear"
                type="text"
                className="input input-bordered input-neutral w-full "
                {...register("purchaseYear")}
              />
            </div>
          </div>
          <div className="w-full">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                name="image"
                type="file"
                className="file-input file-input-bordered w-full "
                {...register("image")}
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              type="text"
              className="textarea textarea-bordered input-neutral w-full "
              {...register("description")}
            ></textarea>
          </div>

          <input
            className="btn btn-warning  w-full mt-3"
            type="submit"
            value="Add Product"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
