import React, { useState, useEffect } from "react";
import RoleDesc from "./RoleDesc";

function RoleTable() {
  const [roles, setRoles] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingRole, setEditingRole] = useState(null);
  const [error, setError] = useState("");
  const [showDesc, setShowDesc] = useState(false);

  useEffect(() => {
    const savedRoles = JSON.parse(localStorage.getItem("roles")) || [];
    setRoles(savedRoles);
  }, []);

  useEffect(() => {
    localStorage.setItem("roles", JSON.stringify(roles));
  }, [roles]);

  const handleSaveRole = (role) => {
    if (!role.name || role.permissions.length === 0) {
      setError("Role name and permissions are required.");
      return;
    }

    if (editingRole) {
      setRoles((prev) =>
        prev.map((r) => (r.id === editingRole.id ? { ...role, id: r.id } : r))
      );
      setEditingRole(null);
    } else {
      setRoles((prev) => [...prev, { ...role, id: Date.now() }]);
    }
    setShowForm(false);
    setError("");
  };

  // Handle Delete Role
  const handleDelete = (id) => {
    const newRoles = roles.filter((r) => r.id !== id);
    setRoles(newRoles);
  };

  return (
    <div className="">
      <div className="p-10 rounded-xl m-1 shadow-2xl">
        <div className="flex w-full items-center justify-between lg:px-16 sm:px-8 px-4 rounded-tl-2xl rounded-tr-2xl py-4 bg-black">
          <h2 className="text-3xl text-white font-bold">Role Management</h2>
          <button
            className="bg-white hover:bg-gray-400 transition-all duration-500 font-semibold text-black pl-5 pr-2 py-2 text-lg rounded-full hover:scale-105"
            onClick={() => setShowForm(true)}
          >
            Add Role
            <i className="w-10 fa-solid fa-plus"></i>
          </button>
        </div>

        {error && (
          <div className="bg-red-500 text-white p-3 mb-4 rounded">
            <strong>Error:</strong> {error}
          </div>
        )}

        <div className="">
          <table className="">
            <thead className="w-full bg-blue-600 h-12">
              <tr>
                <th className="w-[1000px] text-white px-10">Role Name</th>
                <th className="w-1/4 text-white ">Role Description</th>
                <th className="w-1/4 text-white ">Permissions</th>
                <th className="w-1/4 text-white ">Actions</th>
              </tr>
            </thead>
            <tbody>
              {roles.map((role, index) => (
                <tr
                
                  key={role.id}
                  className={`${
                    index % 2 === 0
                      ? "bg-blue-200 hover:bg-blue-300"
                      : "bg-gray-100 hover:bg-gray-300"
                  } h-12 `}
                >
                  <td onClick={()=>setShowDesc(true)} className="cursor-pointer text-center capitalize">{role.name}</td>
                  <td onClick={()=>setShowDesc(true)} className="cursor-pointer text-center ">{role.desc}</td>
                  <td onClick={()=>setShowDesc(true)} className="cursor-pointer text-center">
                    {role.permissions.join(", ")}
                  </td>
                  <td className="text-center">
                    <button
                      className="bg-green-600 hover:bg-green-500 transition-all duration-200 px-4 mr-3 font-semibold text-white rounded-md py-1"
                      onClick={() => {
                        setEditingRole(role);
                        setShowForm(true);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-600 hover:bg-red-500 transition-all duration-200 px-3 font-semibold text-white rounded-md py-1"
                      onClick={() => handleDelete(role.id)}
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
          <RoleForm
            onClose={() => {
              setEditingRole(null);
              setShowForm(false);
            }}
            onSave={handleSaveRole}
            role={editingRole}
            error={error}
          />
        )}
        {showDesc && (
          <RoleDesc
            onClose={() => {
              setShowDesc(false);
            }}
            
          />
        )}
      </div>
    </div>
  );
}

function RoleForm({ onClose, onSave, role, error }) {
  const predefinedPermissions = ["Read", "Write", "Delete"];
  const [name, setName] = useState(role?.name || "");
  const [desc, setDesc] = useState(role?.desc || "");
  const [permissions, setPermissions] = useState(role?.permissions || []);
  const [formError, setFormError] = useState("");

  const handleTogglePermission = (permission) => {
    setPermissions((prev) =>
      prev.includes(permission)
        ? prev.filter((p) => p !== permission)
        : [...prev, permission]
    );
  };

  const handleSubmit = () => {
    if (!name || permissions.length === 0) {
      setFormError("Role name and at least one permission are required.");
      return;
    }

    onSave({ name,desc, permissions });
    setFormError(""); // Clear form-specific error on successful submit
  };

  return (
    <div className="absolute top-0 bg-opacity-50 shadow-2xl bg-black left-0 w-full h-full flex justify-center items-center">
      <div className="bg-white  rounded-lg flex flex-col items-center justify-center shadow-lg px-8 py-4 w-full max-w-md">
        <h3 className="text-xl font-bold mb-4">{role ? "Edit Role" : "Add Role"}</h3>
        <input
          type="text"
          placeholder="Role Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-3 p-2 text-center border rounded"
        />
        <input
        type="text"
          placeholder="Role Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="w-full mb-3 text-center p-2 border rounded"
        />
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Permissions</label>
          <div className="space-y-2">
            {predefinedPermissions.map((permission) => (
              <label
                key={permission}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={permissions.includes(permission)}
                  onChange={() => handleTogglePermission(permission)}
                  className="cursor-pointer"
                />
                <span>{permission}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Error Display */}
        {formError && (
          <div className="bg-red-500 text-white p-3 mb-4 rounded">
            <strong>Error:</strong> {formError}
          </div>
        )}

        <div className="flex justify-end gap-2">
          <button
            className="bg-gray-300 px-4 py-2 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default RoleTable;
