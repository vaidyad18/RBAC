import React from "react";

function RoleDesc({onClose}) {
  return (
    <div className="absolute top-0 bg-opacity-60 shadow-2xl bg-black left-0 w-full h-full flex justify-center items-center">
      <div className="bg-white  rounded-xl flex flex-col items-start justify-center shadow-lg px-5 py-4 w-full max-w-lg">
        <div className="flex w-full  justify-end items-end">
          <button className="" onClick={onClose}>
            <img
              className="w-5 hover:bg-gray-600"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzRGoeeXmycyIcoOCQiJMhX5BRDGglXETXLg&s"
              alt=""
            />
          </button>
        </div>
        <div className="ml-5">
            <div className="mb-4">
                <p className="text-xs text-gray-500">Role Name :</p>
                <p className="font-semibold text-2xl ">Admin</p>
            </div>
            <div className="mb-5">
                <p className="text-xs text-gray-500">Role Description :</p>
                <p className=" text-xl ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam quaerat laborum odit hic, quae optio rem. Ad nam rem culpa?</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default RoleDesc;
