import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import "../../App.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    login(email, password)
      // eslint-disable-next-line no-unused-vars
      .then((result) => {
        navigate(location.state ? location.state : "/");
        e.target.reset();
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  const handleGithubLogin = () => {
    signInWithGithub()
      .then((result) => {
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-[url('./bg.jpg')]">
      <div className="hero-content w-full  flex-col ">
        <div className="card shrink-0 w-2/5  shadow-2xl bg-black bg-opacity-40 blured ">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-3xl text-center font-bold text-gray-200">
              Login
            </h1>

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
            <div>
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link text-blue-100 text-base link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <p className="text-red-500 font-semibold">{loginError}</p>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-lg">Login</button>
            </div>
          </form>
          <p className="text-center  text-gray-200  mb-5">
            New here ?
            <span>
              <Link to={"/register"}>
                <button className="btn btn-link text-xl text-white ">
                  Register now
                </button>
              </Link>
            </span>
          </p>
          <div className="text-center space-y-2 text-white mb-2">
            <p className="text-white text-xl">or</p>
            <p>Sign up with</p>
            <button
              onClick={handleGoogleLogin}
              className="btn btn-circle text-xl mr-2"
            >
              <FcGoogle></FcGoogle>
            </button>
            <button
              onClick={handleGithubLogin}
              className="btn btn-circle text-xl text-black"
            >
              <FaGithub></FaGithub>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
