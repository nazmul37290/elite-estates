import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../../App.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [registerError, setRegisterError] = useState("");
  const navigate = useNavigate();
  const { createUserUsingEmail, updateUserProfile, logOut } =
    useContext(AuthContext);
  // event handler for show password
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  // event Handler for registration
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // check password validation validation
    if (password.length < 6) {
      setRegisterError("password length should above 6 ");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("password must have one capital letter");
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegisterError("password must have one small letter");
      return;
    }

    // creating user
    createUserUsingEmail(email, password)
      .then((result) => {
        // updated user profile

        updateUserProfile(name, photo)
          .then(() => {
            console.log("done");
          })
          .catch((error) => {
            console.error(error);
          });

        console.log(result.user);
        logOut();
        navigate("/login");
        toast.success("Registered successfully, Login now");
        e.target.reset();
      })
      .catch((error) => {
        setRegisterError(error.message);
        console.error(error);
      });
  };

  return (
    <>
      <div className="hero min-h-screen bg-[url('./bg.jpg')]">
        <div className="hero-content w-full  flex-col ">
          <div className="card shrink-0 w-2/5  shadow-2xl bg-black bg-opacity-40 blured ">
            <form onSubmit={handleRegister} className="card-body">
              <h1 className="text-3xl text-center font-bold text-gray-200">
                Register now!
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl text-gray-200 font-bold">
                    Name
                  </span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl text-gray-200 font-bold">
                    Photo Url
                  </span>
                </label>
                <input
                  type="text"
                  name="photoUrl"
                  placeholder="photo url"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl text-gray-200 font-bold">
                    Email
                  </span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl text-gray-200 font-bold">
                    Password
                  </span>
                </label>
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    className="input w-full input-bordered"
                    required
                  />
                  <span
                    onClick={handleShowPassword}
                    className="absolute text-xl mt-4 right-2 "
                  >
                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </span>
                </div>
              </div>
              <p className="text-red-400">{registerError && registerError}</p>

              <div className="form-control mt-6">
                <button className="btn btn-primary text-lg">Register</button>
              </div>
            </form>
            <p className="text-center  text-gray-200  mb-5">
              Already have an account ?
              <span>
                <Link to={"/login"}>
                  <button className="btn btn-link text-xl text-white ">
                    Login
                  </button>
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
