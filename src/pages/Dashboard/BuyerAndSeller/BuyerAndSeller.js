import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const BuyerAndSeller = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [allSellers, setAllSellers] = useState([]);
  // const [remainingUsers, setRemainingUsers] = useState([]);
  // const [remainingSellers, setRemainingSellers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users", {
      headers: {
        authorization: `bearer ${localStorage.getItem("AN_IT")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const users = data.users;
        const sellers = data.sellers;
        // console.log(users);
        if (users) {
          setAllUsers(users);
        }
        if (sellers) {
          setAllSellers(sellers);
          // console.log(sellers);
        }
      });
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Do you want to delete confirm?",
      showCancelButton: true,
      confirmButtonText: "Ok",
    }).then((result) => {
      if (result.isConfirmed) {
      } else if (result.isDenied) {
      }

      fetch(`http://localhost:5000/users/${id}`, {
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
          const remainingUsers = allUsers.filter((users) => users._id !== id);
          setAllUsers(remainingUsers);

          const remainingSellers = allSellers.filter(
            (sellers) => sellers._id !== id
          );
          setAllSellers(remainingSellers);
        });
    });
  };

  return (
    <div className="mt-4">
      <div>
        <h1 className="text-2xl font-bold text-center">All Buyers/Users</h1>
        <div className="mt-4 mr-4">
          <table className="table w-full ">
            <thead>
              <tr>
                <th>
                  <span className="text-lg">Sl</span>
                </th>

                <th>
                  <span className="text-lg">Name</span>
                </th>
                <th>
                  <span className="text-lg">Email</span>
                </th>
                <th>
                  <span className="text-lg ">Action</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {allUsers?.map((user, i) => {
                return (
                  <tr key={user._id}>
                    <th>{i + 1}</th>

                    <td>{user.name}</td>
                    <td>{user.email}</td>

                    <th>
                      <button
                        onClick={() => handleDelete(user._id)}
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

      <div className="mt-14">
        <h1 className="text-2xl font-bold text-center">All Sellers</h1>
        <div className="mt-4 mr-4">
          <table className="table w-full ">
            <thead>
              <tr>
                <th>
                  <span className="text-lg">Sl</span>
                </th>

                <th>
                  <span className="text-lg">Name</span>
                </th>
                <th>
                  <span className="text-lg">Email</span>
                </th>
                <th>
                  <span className="text-lg ">Action</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {allSellers?.map((seller, i) => {
                return (
                  <tr key={seller._id}>
                    <th>{i + 1}</th>

                    <td>{seller.name}</td>
                    <td>{seller.email}</td>
                    <th>
                      <button
                        onClick={() => handleDelete(seller._id)}
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
    </div>
  );
};

export default BuyerAndSeller;
