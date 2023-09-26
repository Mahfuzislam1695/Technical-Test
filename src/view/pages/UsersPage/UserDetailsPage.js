import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import UsersDetails from "../../components/Users/UsersDetails";

const UserDetailsPage = () => {
  const { userId } = useParams();

  console.log("userId", userId);



  return (
    <div>
      <UsersDetails userId={userId} />
    </div>
  );
};

export default UserDetailsPage;
