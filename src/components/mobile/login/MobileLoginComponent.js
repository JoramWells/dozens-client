import {
  ArrowNarrowLeftIcon,
  LockClosedIcon,
  MailIcon,
} from "@heroicons/react/solid";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import InputFormComponent from "../formInput/InputFormComponent";

export default function MobileLoginComponent() {
  const[value, setValue] =useState('')
  const onChange = (value) =>{
    console.log(value);
    setValue(value);

  }

  return (
    <div
      className="bg-gray-50 h-screen mobile__login"
      data-testid="register_div"
    >
      <Helmet>
        <title>Login | Dozens Kenya</title>
      </Helmet>

      <nav className="flex flex-row items-center justify-center space-x-4 mb-2 top-0 bg-white p-2 shadow-lg">
        <div>
          <ArrowNarrowLeftIcon className="h-5" />
        </div>
        <p className=" text-gray-700 text-xl">Create account</p>
      </nav>
      <div className="p-4">
        <div
          className="flex flex-col p-4 items-center justify-center content-center bg-white rounded-md "
          style={{ border: "solid #E0E0E0 1px" }}
        >
          <InputFormComponent
            type="text"
            placeholder="jorammanoah1@gmail.com"
            Icon={MailIcon}
            value={value}
            onChange={onChange}
          />
          <InputFormComponent
            type="password"
            placeholder="******************"
            Icon={LockClosedIcon}
            onChange={onChange}
          />
          <div>
            <Link to="/register" className="text-sm text-gray-400">
              Don't have an account? Sign up
            </Link>
          </div>
          <button className="bg-blue-500 block w-full mt-4 p-2 rounded-md focus:outline-none active:bg-blue-400">
            <p className="text-white font-semibold text-xl">SignIn</p>
          </button>
        </div>
      </div>
    </div>
  );
}
