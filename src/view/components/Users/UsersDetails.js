import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import profile from "../../../asset/Mahfuz Islam.png"
import { useQuery } from "@tanstack/react-query";


const UsersDetails = ({userId}) => {
 
    const {
        refetch,
        isLoading,
        isError,
        error,
        isSuccess,
        data: user = [],
      } = useQuery({
        queryKey: ["userData"],
        queryFn: async () => {
          const res = await fetch(
            `https://deltal-lab-mahfuzislam1695.vercel.app/api/v1/test/singleUser/${userId}`
          );
          const userSingleData = await res.json();
          const data = await userSingleData.data;
          return data;
        },
      });

      if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (isError) {
        return <div>Error: {error.message}</div>;
      }

  return (
    <div className="container mx-auto mt-10 px-4">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center justify-center mb-6">
          <div className="w-20 h-20">
            <img
              src={profile}
              alt={`${user?.first_name} ${user?.last_name}`}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="ml-4">
            <h1 className="text-3xl font-semibold">{`${user?.first_name} ${user?.last_name}`}</h1>
            <p className="text-gray-600">{user?.email}</p>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-6 pt-6">
          <h2 className="text-xl font-semibold mb-4 text-sky-900">
            User Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p>
                <strong>Age:</strong> {user?.age}
              </p>
              <p>
                <strong>Gender:</strong> {user?.gender}
              </p>
              <p>
                <strong>City:</strong> {user?.city}
              </p>
              <p>
                <strong>Country:</strong> {user?.country}
              </p>
            </div>
            <div>
              <p>
                <strong>Phone Number:</strong> {user?.phone_number}
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-6 pt-6">
          <h2 className="text-xl font-semibold mb-4 text-sky-900">Interests</h2>
          <ul className="list-disc pl-6">
            {user?.interests?.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
        </div>
        <div className="border-t border-gray-300 mt-6 pt-6">
          <h2 className="text-xl font-semibold mb-4 text-sky-900">
            Social Profiles
          </h2>
          <ul>
            {Object?.entries(user?.social_profiles).map(([key, value]) => (
              <li key={key} className="mb-2">
                <a
                  href={value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  {key === "twitter" && <FaTwitter className="mr-2" />}
                  {key === "facebook" && <FaFacebook className="mr-2" />}
                  {key === "linkedin" && <FaLinkedin className="mr-2" />}
                  {key === "instagram" && <FaInstagram className="mr-2" />}
                  {key}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default UsersDetails;
