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
    <div className=" bg-gray-50 flex flex-col p-4 justify-start items-center content-center" style={{height:"90vh"}}>
      <div className="bg-white w-full m-2 flex flex-row  focus-within:ring-1 rounded-md">
        <UserIcon className="h-7 m-1 text-gray-500" />
        <input placeholder="Enter username" className="w-full focus:outline-none text-gray-700 rounded-md p-1" />
      </div>
      <div className="bg-white w-full m-2 flex flex-row  focus-within:ring-1 rounded-md">
        <MailIcon className="h-7 m-1 text-gray-500" />
        <input
          placeholder="Enter email"
          className="w-full focus:outline-none text-gray-700 rounded-md p-1"
        />
      </div>
      <div className="bg-white w-full m-2 flex flex-row  focus-within:ring-1 rounded-md">
        <PhoneIcon className="h-7 m-1 text-gray-500" />
        <input
          placeholder="+245 799 989 846"
          className="w-full focus:outline-none text-gray-700 rounded-md p-1"
        />
      </div>
      <div className="bg-white w-full m-2 flex flex-row  focus-within:ring-1 rounded-md">
        <LocationMarkerIcon className="h-7 m-1 text-gray-500" />
        <input
          placeholder="Umoja, Nairobi"
          className="w-full focus:outline-none text-gray-700 rounded-md p-1"
        />
      </div>
      <div className="bg-white w-full m-2 flex flex-row  focus-within:ring-1 rounded-md">
        <LockClosedIcon className="h-7 m-1 text-gray-500" />
        <input
          type="password"
          className="w-full focus:outline-none text-gray-700 rounded-md p-1"
        />
      </div>
    </div>
  );
}
