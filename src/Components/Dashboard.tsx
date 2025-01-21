import React from "react";
import AppHeader from "./AppBar";
import { useSelector } from "react-redux";
import { RootState } from "../ReduxMainToolkit/ReduxMainStore";
// import { DBGetUsers } from "../QueryMain/QueryMainRest";
// import { useQuery } from "@tanstack/react-query";

const Dashboard: React.FC = () => {
  const user = useSelector((state: RootState) => state.mainStore.RegisterInput.RegisteredUser)
  //   const { data } = useQuery({
  //     queryFn: DBGetUsers,
  //     queryKey: ["data"],
  // });

  return (
    <>
      <AppHeader />
      <div className="flex items-center justify-center min-h-screen">
        <h1>Welcome!  </h1>
      </div>
    </>
  );  
};

export default Dashboard;
