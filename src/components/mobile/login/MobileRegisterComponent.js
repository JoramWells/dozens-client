import {
  LocationMarkerIcon,
  LockClosedIcon,
  MailIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/solid";
import React from "react";

export default function MobileRegisterComponent() {
  return (
    <div className="bg-gray-50 p-2">
      <div className="flex flex-col items-center justify-center m-4">
        <p className="font-semibold text-gray-700 text-2xl">Create  account</p>
      </div>
      <div
        className="flex flex-col p-4  items-center justify-center content-center"
        style={{ border: "1px solid black" }}
      >
        <div className="bg-white w-full m-2 flex flex-row  focus-within:ring-1 rounded-md">
          <UserIcon className="h-5 m-1 text-gray-500" />
          <input
            placeholder="Enter username"
            className="w-full focus:outline-none text-gray-700 rounded-md p-1"
          />
        </div>
        <div className="bg-white w-full m-2 flex flex-row  focus-within:ring-1 rounded-md">
          <MailIcon className="h-5 m-1 text-gray-500" />
          <input
            placeholder="Enter email"
            className="w-full focus:outline-none text-gray-700 rounded-md p-1"
          />
        </div>
        <div className="bg-white w-full m-2 flex flex-row  focus-within:ring-1 rounded-md">
          <PhoneIcon className="h-5 m-1 text-gray-500" />
          <input
            placeholder="+245 799 989 846"
            className="w-full focus:outline-none text-gray-700 rounded-md p-1"
          />
        </div>
        <div className="bg-white w-full m-2 flex flex-row  focus-within:ring-1 rounded-md">
          <LocationMarkerIcon className="h-5 m-1 text-gray-500" />
          <input
            placeholder="Umoja, Nairobi"
            className="w-full focus:outline-none text-gray-700 rounded-md p-1"
          />
        </div>
        <div className="bg-white w-full m-2 flex flex-row  focus-within:ring-1 rounded-md">
          <LockClosedIcon className="h-5 m-1 text-gray-500" />
          <input
            type="password"
            className="w-full focus:outline-none text-gray-700 rounded-md p-1"
          />
        </div>
        <button className="bg-blue-500 block w-full mt-4 p-2 rounded-md focus:outline-none active:bg-blue-400">
          SignIn
        </button>
      </div>
    </div>
  );
}
