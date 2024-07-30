import React, { useContext, useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { auth, user } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user) {
      setName(user.displayName);
      setPhoto(user.photoURL);
    }
  }, [user]);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        toast.success("Profile Updated");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error("Something went wrong");
      });
  };

  return (
    <div className="p-4">
      <Helmet>
        <title>Update Profile</title>
      </Helmet>
      <div className="text-center my-6 flex flex-col justify-center items-center gap-4">
        <h1 className="text-xl font-exo text-vsecondary font-semibold">
          Update Your Profile Of - {user?.displayName}
        </h1>

        <form
          onSubmit={handleUpdateProfile}
          className="w-full md:w-[450px] border shadow-sm p-4"
        >
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block border rounded-sm px-3 py-2 my-1 w-full"
            placeholder="Enter your name"
          />
          <label className="label">Photo Url</label>
          <input
            type="text"
            name="photo"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            className="block border rounded-sm px-3 py-2 my-1 w-full"
            placeholder="Enter your photo url"
          />
          <button className="w-full px-3 py-2 rounded-sm bg-[#4e3482] font-semibold text-white my-2 cursor-pointer">
            Save Change
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
