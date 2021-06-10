import {
  LocationMarkerIcon,
  LockClosedIcon,
  MailIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/solid";
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function MobileRegisterComponent() {
  return (
    <div className="bg-gray-50 p-2"
    data-testid="register_div"

     >
      <Helmet>
        <title>Register | Dozens Kenya</title>
      </Helmet>
      {/* <div className="flex flex-col items-center justify-center m-4">
        <p className="font-semibold text-gray-700 text-2xl">Create  account</p>
      </div> */}
      <div className="flex flex-col p-4 items-center justify-center content-center shadow-xl bg-white rounded-md">
        <div className="bg-white w-full my-4 flex flex-row  focus-within:ring-1 rounded-md shadow-md"
            style={{borderBottom:"1px solid whitesmoke"}}
        >
          <UserIcon className="h-5 m-1 text-gray-500" />
          <input
            placeholder="Enter username"
            className="w-full focus:outline-none text-gray-700 rounded-md p-1"
          />
        </div>
        <div className="bg-white w-full my-4 flex flex-row  focus-within:ring-1 rounded-md" style={{borderBottom:"1px solid whitesmoke"}}>
          <MailIcon className="h-5 m-1 text-gray-500" />
          <input
            placeholder="Enter email"
            className="w-full focus:outline-none text-gray-700 rounded-md p-1"
          />
        </div>
        <div className="bg-white w-full my-4 flex flex-row  focus-within:ring-1 rounded-md">
          <PhoneIcon className="h-5 m-1 text-gray-500" />
          <input
            placeholder="+245 799 989 846"
            className="w-full focus:outline-none text-gray-700 rounded-md p-1"
          />
        </div>
        <div className="bg-white w-full my-4 flex flex-row  focus-within:ring-1 rounded-md">
          <LocationMarkerIcon className="h-5 m-1 text-gray-500" />
          <input
            placeholder="Umoja, Nairobi"
            className="w-full focus:outline-none text-gray-700 rounded-md p-1"
          />
        </div>
        <div className="bg-white w-full my-4 flex flex-row  focus-within:ring-1 rounded-md">
          <LockClosedIcon className="h-5 m-1 text-gray-500" />
          <input
            type="password"
            className="w-full focus:outline-none text-gray-700 rounded-md p-1"
          />
        </div>
        <div>
          <Link to="/login" className="text-sm text-gray-400">
            Already have an account?Login
          </Link>
        </div>
        <button className="bg-blue-500 block w-full mt-4 p-2 rounded-md focus:outline-none active:bg-blue-400">
          SignIn
        </button>
      </div>
    </div>
  );
}
