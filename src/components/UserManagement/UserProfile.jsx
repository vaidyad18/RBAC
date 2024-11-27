import { useState } from "react";
import React from "react";
import UserForm from "./UserForm";

function UserProfile({ onClose }) {
  return (
    <div className="absolute top-0 bg-opacity-60 shadow-2xl bg-black left-0 w-full h-full flex justify-center items-center">
      <div className="bg-white  rounded-xl flex flex-col items-center justify-center shadow-lg px-5 py-4 w-full max-w-lg">
        <div className="flex w-full  justify-end items-end">
          <button className="" onClick={onClose}>
            <img
              className="w-5 hover:bg-gray-600"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzRGoeeXmycyIcoOCQiJMhX5BRDGglXETXLg&s"
              alt=""
            />
          </button>
        </div>

        <div className="flex -ml-10 pb-3">
          <img
            className="w-44 h-44"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png"
            alt=""
          />

          <div className="flex flex-col justify-center ml-5">
            <div className="mb-2">
              <p className="text-xs text-gray-500">Name : </p>
              <p className="font-semibold text-2xl ">Vaidya Dandriyal</p>
            </div>
            <div className="mb-2">
              <p className="text-xs text-gray-500">Email Address : </p>
              <p className="font-semibold"> vaidyadandriyal18@gmail.com</p>
            </div>
            <div className="mb-2">
              <p className="text-xs text-gray-500">Role : </p>
              <p className="font-semibold">Admin</p>
            </div>

            <div className="w-full pr-20 flex justify-center items-center gap-2 font-semibold">
              <img
                className="w-4 ml-16"
                src="https://cdn.icon-icons.com/icons2/259/PNG/128/ic_radio_button_on_128_28538.png"
                alt=""
              />
              <p className="">Active</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
