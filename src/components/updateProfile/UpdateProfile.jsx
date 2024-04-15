/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    updateUserProfile(name, photoUrl)
      .then((result) => {
        navigate("/updateProfile");
      })

      .catch((error) => {});
  };
  return (
    <div className="bg-gray-300 min-h-screen">
      <div
        className="pt-24 flex flex-col  
     justify-center items-center"
      >
        <div className="h-[300px] w-[300px] rounded-full">
          <img
            src={user.photoURL}
            className="w-full h-full rounded-full border"
            alt=""
          />
        </div>
        <h2 className="text-2xl font-bold">{user.displayName}</h2>
        <form
          onSubmit={handleUpdateProfile}
          className="card-body w-auto mt-10 lg:w-96 rounded-lg bg-gray-400"
        >
          <h1 className="text-3xl text-center text-white font-bold">
            Update profile
          </h1>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-xl text-white">
                Name
              </span>
            </label>
            <input
              defaultValue={user.displayName}
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-xl text-white">
                Profile Url
              </span>
            </label>
            <input
              type="text"
              placeholder="photo url"
              defaultValue={user.photoURL}
              name="photoUrl"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary text-xl font-bold">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
