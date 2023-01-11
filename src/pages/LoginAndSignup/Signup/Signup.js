import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import image from "../../../Assets/images/signup.webp";
import useToken from "../../../Hooks/useToken";

const Signup = () => {
  const { createUser, userUpdate, googleLogin } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [signupError, setSignUpError] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();

  if (token) {
    navigate("/");
  }

  const handleSignup = (data) => {
    setSignUpError("");
    // console.log(data);

    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        // console.log("user", user);
        setCreatedUserEmail(user?.email);
        toast.success("User Created Successfully.");
        const userInfo = {
          displayName: data.name,
          role: data.role,
        };
        userUpdate(userInfo)
          .then(() => {
            console.log(userInfo);
            saveUser(data.name, data.email, data.role);
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
        setSignUpError(error.message);
      });
  };

  const handleLoginWithGoogle = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        // console.log("google", user);
        saveUser(user.displayName, user.email, "User");
      })
      .catch((error) => console.error(error));
  };

  const saveUser = (name, email, role) => {
    const user = { name, email, role };
    fetch("https://laptop-sells-server.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
        // console.log(email);
      });
  };

  return (
    <div className="md:flex flex-column-reverse  items-center  my-16">
      <div className="md:w-1/2 w-full ">
        <img src={image} alt="" />
      </div>
      <div className="  mx-auto md:px-0 px-2 md:w-1/2 w-full md:pt-0 pt-10 ">
        <div className=" lg:w-[450px] md:w-[400px] shadow-2xl  m-2 md:p-10 p-4 ">
          <h3 className="text-3xl text-center mb-3 font-bold">Sign Up</h3>
          <form onSubmit={handleSubmit(handleSignup)}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="input input-bordered input-default w-full "
              />
              {errors.name && (
                <p className="text-red-500" role="alert">
                  {errors.name?.message}
                </p>
              )}
            </div>
            <div className="form-control w-full mt-2">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: "Email Address is required",
                })}
                type="email"
                className="input input-bordered input-default w-full "
                required
              />
              {errors.email && (
                <p className="text-red-500" role="alert">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="form-control w-full mt-2">
              <label className="label">
                <span className="label-text">User</span>
              </label>
              <select
                type="text"
                {...register("role")}
                className="select select-bordered w-full "
                defaultValue="User"
              >
                <option>User</option>
                <option>Seller</option>
              </select>
            </div>

            <div className="form-control w-full mt-2">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password mininum 6 characters",
                  },
                })}
                type="password"
                className="input input-bordered input-default w-full "
              />
              {errors.password && (
                <p className="text-red-500" role="alert">
                  {errors.password?.message}
                </p>
              )}
            </div>
            <input
              className="btn btn-warning w-full mt-4"
              type="submit"
              value="Sign Up"
            />
          </form>
          <p className="text-center text-sm mt-1">
            Already have an account? Please{" "}
            <Link to="/login" className="text-warning ">
              Login
            </Link>
          </p>
          {signupError && <p className="text-red-500">{signupError}</p>}
          <div className="divider">OR</div>
          <input
            onClick={handleLoginWithGoogle}
            className="btn btn-outline btn-warning w-full"
            type="submit"
            value="CONTINUE WITH GOOGLE"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
