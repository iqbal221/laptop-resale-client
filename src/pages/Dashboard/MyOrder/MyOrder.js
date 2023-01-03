import React, { useEffect, useState, useContext } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Context/AuthProvider";

const MyOrder = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(
      `https://laptop-sells-server.vercel.app/bookings?email=${user?.email}`,
      {
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("AN_IT")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
      });
  }, [user?.email]);

  const handleOrderDelete = (id) => {
    Swal.fire({
      title: "Do you want to delete confirm?",
      showCancelButton: true,
      confirmButtonText: "Ok",
    }).then((result) => {
      if (result.isConfirmed) {
      } else if (result.isDenied) {
      }
      fetch(`https://laptop-sells-server.vercel.app/myOrder/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("AN_IT")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            toast.success("Deleted Successfully");
          }
          const remainingProducts = orders.filter(
            (product) => product._id !== id
          );
          setOrders(remainingProducts);
        });
    });
  };

  return (
    <div className="mt-4">
      <h1 className="text-2xl font-bold text-center">My Order</h1>
      <div className="mt-4 mr-4">
        <table className="table w-full ">
          <thead>
            <tr>
              <th>
                <span className="text-lg">Sl</span>
              </th>
              <th>
                <span className="text-lg">Image</span>
              </th>
              <th>
                <span className="text-lg">Product</span>
              </th>
              <th>
                <span className="text-lg">Price</span>
              </th>
              <th>
                <span className="text-lg">Status</span>
              </th>
              <th>
                <span className="text-lg ">Action</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => {
              return (
                <tr key={order._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className=" w-12 h-12 pt-2">
                        <img className="w-full" src={order.image} alt="..." />
                      </div>
                    </div>
                  </td>
                  <td>{order.product}</td>
                  <td>${order.price}</td>
                  <th>
                    <button className="btn btn-warning btn-sm ">pay</button>
                  </th>
                  <th>
                    <button
                      onClick={() => handleOrderDelete(order._id)}
                      className="btn btn-error btn-sm "
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
