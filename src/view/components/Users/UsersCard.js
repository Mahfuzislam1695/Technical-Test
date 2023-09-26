import React from "react";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const UsersCard = ({ name, email, imageUrl, userId }) => {
  const navigate = useNavigate();

  const handleUserDetails = () => {
    navigate(`/user/${userId}`);
  };
  return (
    <div className="bg-white w-full  rounded-xl overflow-hidden border border-sky-200 group cursor-pointer relative">
      <div className="h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt="name"
          className="w-full h-48 p-2 group-hover:scale-110 transition duration-300 ease-in-out overflow-hidden"
        />
      </div>
      <div className="p-4 w-full">
        <div className="flex items-center mb-2">
          <FaUser className="text-sky-900 mr-2 min-w-fit" />
          <h2
            className="text-xl font-semibold"
            style={{ wordBreak: "break-all" }}
          >
            {name}
          </h2>
        </div>
        <div className="flex items-center">
          <FaEnvelope className="text-sky-900 mr-2 min-w-fit" />
          <div
            className="text-sky-950 text-xs font-semibold"
            style={{ wordBreak: "break-all" }}
          >
            {email}
          </div>
        </div>
      </div>

      <div
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ backgroundColor: "rgba(224, 242, 254, 0.1)" }}
      >
        <button
          onClick={handleUserDetails}
          className="text-sky-900 text-xl font-bold  px-4 py-2 border-2 border-sky-900  transition-colors"
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default UsersCard;
