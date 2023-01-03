import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import { AiOutlineHeart } from "react-icons/ai";

const Advertisement = () => {
  const { user } = useContext(AuthContext);
  const { data: addSpecialProduct = [], isLoading } = useQuery({
    queryKey: ["addSpecialProduct", user?.email],
    queryFn: async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/addSpecialProduct?email=${user?.email}`,
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("AN_IT")}`,
            },
          }
        );
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  if (isLoading) {
    return;
  }

  return (
    <div>
      {addSpecialProduct.length > 0 && (
        <div className="mt-40">
          <h2 className="text-4xl text-violet-500 text-center mt-24 font-bold">
            Special Products Only for You
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-20">
            {addSpecialProduct.map((sp) => (
              <div key={sp._id} className="card bg-base-100 shadow-lg ">
                <figure>
                  <img
                    src={sp.image}
                    alt="Shoes"
                    className="w-64 h-52 px-3 pt-5 pb-2"
                  />
                </figure>
                <div className="card-body ">
                  <h2 className="text-lg text-primary font-400 mb-3">
                    {sp.product}
                  </h2>
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl ">${sp.resalePrice}</h2>
                    <div
                      className="tooltip flex items-center"
                      data-tip="Add To Whislist"
                    >
                      <Link
                        className=" flex items-center"
                        to={`/wishlistSpecial/${sp._id}`}
                      >
                        <button>
                          <AiOutlineHeart className="text-pink-500 text-3xl mr-16" />
                        </button>
                      </Link>
                    </div>
                    <Link
                      className="btn btn-outline btn-warning btn-sm"
                      to={`/addSpecialProduct/${sp._id}`}
                    >
                      <button>Show details</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Advertisement;
