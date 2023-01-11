import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import image from "../../../Assets/images/login.jpg";
import useToken from "../../../Hooks/useToken";

const Login = () => {
  const [userLoginEmail, setUserLoginEmail] = useState("");
  const [loginError, setLoginError] = useState("");
  const [token] = useToken(userLoginEmail);
  const { userLogin, googleLogin } = useContext(AuthContext);
  // const location = useLocation();
  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  // const from = location.state?.from?.pathname || "/";

  if (token) {
    // navigate(from, { replace: true });
    navigate("/");
  }

  const handleLogin = (data) => {
    // console.log(data);

    const email = data.email;
    const password = data.password;

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        console.log("user", user);
        setUserLoginEmail(email);
      })
      .catch((error) => {
        console.log(error);
        setLoginError(error.message);
      });
  };

  const handleLoginWithGoogle = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="md:flex flex-column items-center mt-20">
      <div className="md:w-1/2 w-full">
        <img src={image} alt="" />
      </div>

      <div className=" mx-auto md:mt-0 mt-14 md:px-0 px-3   md:w-1/2 w-full ">
        <div className=" lg:w-[430px] shadow-2xl md:p-8 p-4 ">
          <h3 className="text-3xl text-center mb-3 font-bold">Login</h3>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered input-default w-full "
                {...register("email", {
                  required: "Email Address is required",
                })}
              />
              {errors.email && (
                <p className="text-red-500" role="alert">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="form-control w-full mt-2">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                className="input input-bordered input-neutral w-full "
                {...register("password", { required: "Password is required" })}
              />

              <label className="label">
                <span className="label-text">Forget Password ?</span>
              </label>
              {errors.password && (
                <p className="text-red-500" role="alert">
                  {errors.password?.message}
                </p>
              )}
            </div>
            <div className="form-control">
              <input
                className="btn btn-warning  w-full mt-3"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <p className="text-center text-sm mt-1">
            New to AN IT BARI ?{" "}
            <Link to="/signup" className="text-warning ">
              create new account
            </Link>
          </p>
          <p className="text-red-500">{loginError}</p>
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

export default Login;
