import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";

const CategoryCard = ({ category }) => {
  const { resalePrice, product, image, _id } = category;
  // console.log(category);

  return (
    <div className="card bg-base-100 md:shadow-lg shadow-md ">
      <figure>
        <img src={image} alt="Shoes" className="w-64 h-52 px-3 pt-5 pb-2" />
      </figure>
      <div className="card-body ">
        <h2 className="text-lg text-primary font-400 mb-3">{product}</h2>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl ">${resalePrice}</h2>

          <div className="tooltip flex items-center" data-tip="Add To Whislist">
            <Link className=" flex items-center" to={`/wishlist/${_id}`}>
              <button>
                <AiOutlineHeart className="text-pink-500 text-3xl mr-16" />
              </button>
            </Link>
          </div>
          <Link
            className="btn btn-outline btn-warning btn-sm"
            to={`/categories/${_id}`}
          >
            <button>Show details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
