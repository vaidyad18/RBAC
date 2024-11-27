import React, { useState, useRef } from "react";

function UserForm({ onClose, onSave, roles, user }) {
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [role, setRole] = useState(user?.role || "");
  const [active, setActive] = useState(user?.active || false);
  const [isVisible, setIsVisible] = useState(false);
  
  const InputRef = useRef(null);
  const [error, setError] = useState("");

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  const handleSubmit = () => {
    

    if (!name || !email || !role) {
      setError("All the fields are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please Enter a Valid Email Address.");
      return;
    }

    onSave({ name, email, role, active });
  };


  return (
    <div className="absolute top-0 bg-opacity-50 shadow-2xl bg-black left-0 w-full h-full flex justify-center items-center">
      <div className="bg-white  rounded-lg flex flex-col items-center justify-center shadow-lg px-8 py-4 w-full max-w-md">
        <h3 className="text-2xl text-center font-bold mb-4">
          {user ? "Edit User" : "New User"}
        </h3>
        <form
          className="flex flex-col items-center w-full px-8 justify-center"
          action=""
        >
          

    
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full placeholder-gray-600 capitalize mb-3 text-center p-2 shadow-lg border rounded-lg"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full placeholder-gray-600 text-center mb-3 shadow-lg p-2 border rounded-lg"
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full mb-3 text-center shadow-lg p-2 border rounded-lg"
          >
            <option className="cursor-pointer" value="" disabled>
              Select Role
            </option>
            {roles.map((r) => (
              <option key={r.name} value={r.name}>
                {r.name}
              </option>
            ))}
          </select>
          <label className="flex justify-center items-center gap-2 mb-4">
            <input
              className="accent-green-400"
              type="checkbox"
              checked={active}
              onChange={(e) => setActive(e.target.checked)}
            />
            Active
          </label>
          {error && (
          <div className="bg-red-500 text-white p-3 mb-4 rounded">
            <strong>Error:</strong> {error}
          </div>
        )}
          <div className="flex justify-center gap-5">
            <button
              className="bg-gray-300  px-4 py-2 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <div
              className="bg-blue-500  text-white px-4 py-2 rounded"
              onClick={handleSubmit}
            >
              Save
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserForm;
