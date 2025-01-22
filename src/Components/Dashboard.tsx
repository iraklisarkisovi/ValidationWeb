import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../ReduxMainToolkit/ReduxMainStore";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";
import { useQuery } from "@tanstack/react-query";
import { DBGetUsers } from "../QueryMain/QueryMainRest";
import AppHeader from "./AppBar";

const Dashboard: React.FC = () => {
  const theme = useSelector((state: RootState) => state.mainStore.ThemeChanger);
  const { user } = useAuth();
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery({
    queryFn: DBGetUsers,
    queryKey: ["data"],
  });

  if (!user) {
    navigate("/");
    return null;
  }

  if (isLoading) return <h1 className="mt-10 text-center">Loading data...</h1>;
  if (error)
    return (
      <h1 className="mt-10 text-center">
        Something went wrong. Please try again later.
      </h1>
    );

  const filteredUserData = data?.find((item: any) => item.email === user.email);

  if (!filteredUserData) {
    return (
      <h1 className="mt-10 text-center">
        User not found. Please contact support.
      </h1>
    );
  }

  return (
    <div
      className={`w-full min-h-screen ${
        theme ? "bg-gray-700 text-gray-200" : "bg-slate-200 text-black"
      }`}
    >
      <AppHeader />

      <div className="p-4">
        
        <div
          className={`p-6 mb-6 rounded-lg shadow-md ${
            theme ? "bg-gray-800 text-gray-100" : "bg-white text-black"
          }`}
        >
          <h2 className="mb-4 text-2xl font-bold">Summary</h2>
          <p>
            <strong>Name:</strong> {filteredUserData.firstname}{" "}
            {filteredUserData.lastname}
          </p>
          <p>
            <strong>Email:</strong> {filteredUserData.email}
          </p>
          <p>
            <strong>Role:</strong> {filteredUserData.role}
          </p>
        </div>

 
        {filteredUserData.role === "courier" && (
          <div
            className={`p-6 mb-6 rounded-lg shadow-md ${
              theme ? "bg-gray-800 text-gray-100" : "bg-white text-black"
            }`}
          >
            <h2 className="mb-4 text-2xl font-bold">Your Workdays</h2>
            <ul>
              {filteredUserData.workdays.map((item: any, index: number) => (
                <li key={index} className="mb-4">
                  <p>
                    <strong>Day:</strong> {item.day}
                  </p>
                  <p>
                    <strong>Start Hour:</strong> {item.startHour}
                  </p>
                  <p>
                    <strong>End Hour:</strong> {item.endHour}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}

 
        <div
          className={`p-6 mb-6 rounded-lg shadow-md ${
            theme ? "bg-gray-800 text-gray-100" : "bg-white text-black"
          }`}
        >
          <h2 className="mb-4 text-2xl font-bold">Insights</h2>
          {filteredUserData.role === "courier" ? (
            <p>
              You have completed 12 deliveries this week. Keep up the great
              work!
            </p>
          ) : (
            <p>
              You have logged in 5 times this month. Stay productive and reach
              your goals!
            </p>
          )}
        </div>
 
        <div
          className={`p-6 rounded-lg shadow-md ${
            theme ? "bg-gray-800 text-gray-100" : "bg-white text-black"
          }`}
        >
          <h2 className="mb-4 text-2xl font-bold">Activity Logs</h2>
          <ul>
            {filteredUserData.activityLogs?.length > 0 ? (
              filteredUserData.activityLogs.map((log: any, index: number) => (
                <li key={index} className="mb-4">
                  <p>
                    <strong>Date:</strong> {log.date}
                  </p>
                  <p>
                    <strong>Activity:</strong> {log.activity}
                  </p>
                </li>
              ))
            ) : (
              <p>No recent activity.</p>
            )}
          </ul>
        </div>
      </div>

 
      <footer
        className={`text-center p-4 mt-6 ${
          theme ? "bg-gray-900 text-gray-300" : "bg-gray-300 text-black"
        }`}
      >
        <p>
          &copy; {new Date().getFullYear()} ValidationWeb. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Dashboard;
