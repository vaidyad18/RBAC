import React, { useState, useRef } from "react";

function UserForm({ onClose, onSave, roles, user }) {
  const [avatar, setAvatar] = useState(user?.avatar || "");
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [role, setRole] = useState(user?.role || "");
  const [active, setActive] = useState(user?.active || false);
  const [isVisible, setIsVisible] = useState(false);
  const [image, setImage] = useState(user?.avatar || "");
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

    onSave({ avatar,image , name, email, role, active });
  };

  const HandleImageClick = () => {
    InputRef.current.click();
  };

  const HandleImageChange = (event) => {
    const file = event.target.value;
    setImage(event.target.files[0]);
  };

  const HandleAvatarChange = (event) => {
    const file = event.target.value;
    setImage(event.target.files[0]);
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
          {image ? (
            <img
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
              className="w-40 object-cover h-40 rounded-full mb-2"
              src={URL.createObjectURL(image)}
              alt=""
            />
          ) : (
            <img
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
              className="w-40 rounded-full mb-2"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png"
              alt=""
            />
          )}

          <div className="relative">
            <div
              onClick={toggleVisibility}
              className={`${
                isVisible ? "left-32 -top-10" : "left-5 -top-10"
              } cursor-pointer absolute  bg-gray-300 px-4 rounded py-[0.1rem]`}
            >
              Edit
            </div>

            <div
              className={`${
                isVisible ? "flex" : "hidden"
              } items-center justify-center flex-col mb-6`}
            >
              <p className="mb-1 text-[0.9rem] font-semibold text-gray-600">
                Pick an Avatar
              </p>
              <div className="flex flex-row gap-3 mb-3 items-center justify-center">
                {avatar ? (
                  <img
                    value={avatar}
                    onChange={(e) => setAvatar(e.target.value)}
                    className="w-40 object-cover h-40 rounded-full mb-2"
                    src={avatar}
                    alt=""
                  />
                ) : (
                  <img
                    value={avatar}
                    onChange={(e) => setImage(e.target.value)}
                    className="w-12 cursor-pointer hover:border-2 hover:rounded-full hover:border-gray-400 transition-all hover:scale-125"
                  src="https://cdn-icons-png.flaticon.com/512/6858/6858504.png"
                  alt=""
                  />
                )}
                
                <img
                  className="w-12 cursor-pointer hover:border-2 hover:rounded-full hover:border-gray-400 transition-all hover:scale-125"
                  src="https://cdn-icons-png.freepik.com/512/6858/6858586.png"
                  alt=""
                />
                <img
                  className="w-12 cursor-pointer hover:border-2 hover:rounded-full hover:border-gray-400 transition-all hover:scale-125"
                  src="https://cdn-icons-png.freepik.com/512/6858/6858478.png"
                  alt=""
                />
                <img
                  className="w-12 cursor-pointer hover:border-2 hover:rounded-full hover:border-gray-400 transition-all hover:scale-125"
                  src="https://cdn-icons-png.flaticon.com/512/6858/6858504.png"
                  alt=""
                />
              </div>
              <div
                className="cursor-pointer hover:bg-gray-100 font-semibold transition-all text-xs border-2 text-gray-700 rounded-lg px-5 py-2 flex justify-center items-center "
                onClick={HandleImageClick}
              >
                Upload from computer
                <input
                  type="file"
                  accept="/image/*"
                  onChange={HandleImageChange}
                  ref={InputRef}
                  className="hidden"
                />
              </div>
            </div>
          </div>
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
