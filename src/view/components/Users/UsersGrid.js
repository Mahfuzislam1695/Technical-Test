import React from "react";
import profile from "../../../asset/Mahfuz Islam.png"
import UsersCard from "./UsersCard";

const UsersGrid = ({user}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 bg-slate-100 ">
      {user.map((user, index) => (
        <div key={index} className="flex">
          <UsersCard
            name={user.first_name}
            email={user.email}
            imageUrl={profile}
            userId={user._id}
          />
        </div>
      ))}
    </div>
  );
};

export default UsersGrid;
