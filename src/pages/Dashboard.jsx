import React, { useState } from "react";
import UserTable from "../components/UserManagement/UserTable";
import RoleTable from "../components/RoleManagement/RoleTable";
import Home from "../components/Home";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("users");

  return (
    <div className="dashboard">
      <nav className=" flex  bg-[#083d59] py-2">
        <div className="ml-10 w-full flex items-center justify-start">
          <img
            className="w-10 mr-4"
            src="https://vrvsecurityservices.com/wp-content/uploads/2023/12/logo-.png"
            alt=""
          />
          <a href="#" className="text-white font-bold text-3xl">
            VRV Security
          </a>
        </div>

        <button
          className={`mx-2 px-5 font-semibold ${
            activeTab === "users"
              ? " text-[#ffa84b]"
              : " text-white transition-all duration-300 hover:text-[#ffa84b]"
          } text-3xl`}
          onClick={() => setActiveTab("users")}
        >
          User
        </button>

        <button
          className={`mx-2 md:px-20 px-5 font-semibold ${
            activeTab === "roles"
              ? " text-[#ffa84b]"
              : " text-white transition-all duration-300 hover:text-[#ffa84b]"
          } text-3xl`}
          onClick={() => setActiveTab("roles")}
        >
          Role
        </button>

      </nav>

    
      <div className=" p-6">
        {activeTab === "users" ? <UserTable /> : <RoleTable />}
      </div>
    </div>
  );
}

export default Dashboard;
