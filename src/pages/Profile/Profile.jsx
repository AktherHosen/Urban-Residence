import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="p-4">
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <div className="text-center my-6">
        <h1 className="text-xl font-exo text-vsecondary font-semibold">
          Your Profile
        </h1>
        <p>See Your Details, You can edit it also.</p>
      </div>
      <div className="flex  justify-center items-center p-6 ">
        <div className="min-w-[450px] flex items-center md:items-center flex-col md:flex-row gap-3  border p-3">
          {user.photoURL ? (
            <img src={user?.photoURL} className="h-40 w-40" alt="" />
          ) : (
            <>
              <FaUserCircle size={25} />
            </>
          )}
          <div className="flex flex-col justify-center">
            <h2 className="text-lg font-semibold">{user.displayName}</h2>
            <h3 className="text-lg">{user.email}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
