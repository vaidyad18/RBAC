import React, { useState, useEffect } from "react";
import UserForm from "./UserForm";


function UserTable() {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const savedRoles = JSON.parse(localStorage.getItem("roles")) || [];
    setUsers(savedUsers);
    setRoles(savedRoles);
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleSaveUser = (user) => {
    if (editingUser) {
      setUsers((prev) =>
        prev.map((u) => (u.id === editingUser.id ? { ...user, id: u.id } : u))
      );
      setEditingUser(null);
    } else {
      setUsers((prev) => [...prev, { ...user, id: Date.now() }]);
    }
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <div className="">
      <div className="p-10 rounded-xl bg-slate-400 shadow-[0_55px_80px_-20px_rgba(255,255,255,0.3)] m-1 ">
        <div className="flex w-full items-center justify-between lg:px-16 sm:px-8 px-4 rounded-tl-2xl rounded-tr-2xl py-4 bg-black">
          <h2 className="text-3xl text-white font-bold">User Management</h2>
          <button
            className="bg-white hover:bg-gray-400 transition-all duration-500 font-semibold text-black pl-5 pr-3 py-2 text-lg rounded-full hover:scale-105"
            onClick={() => setShowForm(true)}
          >
            Add User
            <i className="w-10 fa-solid fa-user-plus"></i>
          </button>
        </div>

        <div className="">
          <table className="">
            <thead className="w-full bg-blue-600 h-12">
              <tr>
                <th className="w-96  text-white">Name</th>
                <th className="w-80 text-white ">Email</th>
                <th className="w-72 text-white ">Role</th>
                <th className="w-64 text-white">Status</th>
                <th className="w-72 text-white">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={user.id}
                  className={`${
                    index % 2 === 0
                      ? "bg-blue-200 hover:bg-blue-300"
                      : "bg-gray-100 hover:bg-gray-300"
                  } h-12`}
                >
                  <td
                    onClick={() => setShowProfile(true)}
                    className="   text-center text-lg"
                  >
                    {user.name}
                  </td>
                  <td
                    onClick={() => setShowProfile(true)}
                    className="   text-center"
                  >
                    {user.email}
                  </td>
                  <td
                    onClick={() => setShowProfile(true)}
                    className="  text-center text-lg"
                  >
                    {user.role}
                  </td>
                  <td
                    onClick={() => setShowProfile(true)}
                    className="   text-center"
                  >
                    <div className="flex items-center justify-center">
                      <img
                        className="w-4 mr-1 h-4"
                        src={
                          user.active
                            ? "https://cdn.icon-icons.com/icons2/259/PNG/128/ic_radio_button_on_128_28538.png"
                            : "https://cdn-icons-png.flaticon.com/512/12348/12348982.png"
                        }
                        alt=""
                      />
                      {user.active ? "Active" : "Inactive"}
                    </div>
                  </td>
                  <td className="text-center ">
                    <button
                      className="bg-green-600 hover:bg-green-500 transition-all duration-200 px-4 mr-3 font-semibold text-white rounded-md py-1"
                      onClick={() => {
                        setEditingUser(user);
                        setShowForm(true);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-600 hover:bg-red-500 transition-all duration-200 px-3 font-semibold text-white rounded-md py-1"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showForm && (
          <UserForm
            onClose={() => {
              setEditingUser(null);
              setShowForm(false);
            }}
            onSave={handleSaveUser}
            roles={roles}
            user={editingUser}
          />
        )}
      </div>
    </div>
  );
}

export default UserTable;
