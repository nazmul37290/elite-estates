import { Link, NavLink } from "react-router-dom";
import "../../App.css";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/updateProfile"}>Update profile</NavLink>
      </li>
      {user ? (
        <li>
          <NavLink to={"/profile"}>User profile</NavLink>
        </li>
      ) : (
        ""
      )}

      <li>
        <NavLink to={"/register"}>Register</NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut();
  };

  return (
    <div className="navbar absolute z-10 lg:px-10 bg-black bg-opacity-40 blured">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className=" text-gray-200 text-2xl font-bold">EliteEstates</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal  text-white font-bold px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <div
          className="tooltip tooltip-bottom"
          data-tip={user && user.displayName}
        >
          {user && (
            <img
              className={`rounded-full mx-2`}
              height={45}
              width={45}
              src={user.photoURL}
              alt=""
            />
          )}
        </div>

        {user ? (
          <a onClick={handleLogOut} className="btn">
            Log out
          </a>
        ) : (
          <Link to={"/login"}>
            <button className="btn ">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
