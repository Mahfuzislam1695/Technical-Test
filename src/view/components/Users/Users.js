import { useQuery } from "@tanstack/react-query";
import React from "react";
import UsersGrid from "./UsersGrid";
import UsersList from "./UsersList";

const Users = () => {
  const {
    refetch,
    isLoading,
    isError,
    error,
    isSuccess,
    data: allUserData = [],
  } = useQuery({
    queryKey: ["allUserData"],
    queryFn: async () => {
      const res = await fetch(
        `https://deltal-lab-mahfuzislam1695.vercel.app/api/v1/test/allUser`
      );
      const userData = await res.json();
      const data = await userData.data;
      return data;
    },
  });

  return (
    <div>
      <div className="text-xl font-bold">User Information</div>
      <UsersGrid user={allUserData}/>
      <UsersList />
    </div>
  );
};

export default Users;
