import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const MyProduct = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  // load data for my product data
  useEffect(() => {
    fetch(`http://localhost:5000/addProduct?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProducts(data);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Do you want to delete confirm?",
      showCancelButton: true,
      confirmButtonText: "Ok",
    }).then((result) => {
      if (result.isConfirmed) {
      } else if (result.isDenied) {
      }

      fetch(`http://localhost:5000/addProduct/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.acknowledged) {
            toast.success("Deleted Successfully");

            // Delete advirtise product from home page
            DeleteFromHomePage(id);
          }
          const remainingProducts = products.filter(
            (product) => product._id !== id
          );
          setProducts(remainingProducts);
        });
    });
  };

  const DeleteFromHomePage = (id) => {
    fetch(`http://localhost:5000/addSpecialProduct/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
      });
  };

  const handleSpecialProduct = (pd) => {
    const {
      email,
      product,
      resalePrice,
      originalPrice,
      condition,
      phone,
      location,
      category,
      year,
      purchaseYear,
      image,
      seller,
    } = pd;
    const specialProductInfo = {
      email: email,
      product: product,
      resalePrice: resalePrice,
      originalPrice: originalPrice,
      condition: condition,
      phone: phone,
      location: location,
      category: category,
      year: year,
      purchaseYear: purchaseYear,
      image: image,
      seller: seller,
    };

    fetch(`http://localhost:5000/addSpecialProduct`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("AN_IT")}`,
      },
      body: JSON.stringify(specialProductInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          toast.success("Product added to advertisement");
        }
        toast.error(data.message);
      });
  };

  return (
    <div className="mt-4">
      <h1 className="text-2xl font-bold text-center">My Product</h1>
      <div className="mt-4 mr-4">
        <table className="table w-full table-normal	">
          <thead>
            <tr>
              <th>
                <span className="text-md">Sl</span>
              </th>
              <th>
                <span className="text-md">Image</span>
              </th>
              <th>
                <span className="text-md">Product</span>
              </th>
              <th>
                <span className="text-md">Price</span>
              </th>
              <th>
                <span className="text-md">Status</span>
              </th>
              <th>
                <span className="text-md">Display</span>
              </th>
              <th>
                <span className="text-md ">Action</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => {
              return (
                <tr key={product._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className=" w-12 h-12 pt-2">
                        <img className="w-full" src={product.image} alt="..." />
                      </div>
                    </div>
                  </td>
                  <td>{product.product}</td>
                  <td>${product.resalePrice}</td>
                  <th>
                    <button className="btn btn-info text-default btn-sm ">
                      Available
                    </button>
                  </th>
                  <th>
                    <button
                      onClick={() => handleSpecialProduct(product)}
                      className="btn btn-warning text-default btn-sm "
                    >
                      Unsold
                    </button>
                  </th>
                  <th>
                    <button
                      onClick={() => handleDelete(product._id)}
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

export default MyProduct;
