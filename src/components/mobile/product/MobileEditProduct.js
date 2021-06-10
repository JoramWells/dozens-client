import {
  CashIcon,
  PencilAltIcon,
  PhotographIcon,
  XIcon,
} from "@heroicons/react/solid";
import React from "react";
import { Helmet } from "react-helmet";

export default function MobileEditProduct() {
  return (
    <div className="bg-gray-50 mobile__register" data-testid="register_div">
      <Helmet>
        <title>Edit product | Dozens Kenya</title>
      </Helmet>

      <nav className="flex flex-row items-center justify-center space-x-4 mb-2 top-0 bg-white p-2 shadow-lg">
        <div>
          <XIcon className="h-5" />
        </div>
        <p className=" text-gray-700 text-xl">Add product</p>
      </nav>
      <div className="p-4">
        <div
          className="flex flex-col p-4 items-center justify-center content-center bg-white rounded-md "
          style={{ border: "solid #E0E0E0 1px" }}
        >
          <div className="bg-white w-full my-4 flex flex-row p-1  ring-1 ring-gray-200 rounded-md items-center">
            <PencilAltIcon className="h-5 m-1 text-gray-400" />
            <input
              placeholder="air force"
              className="w-full focus:outline-none text-gray-700 rounded-md p-1"
            />
          </div>
          <div className="bg-white w-full my-4 flex flex-row ring-1 p-1 ring-gray-200 rounded-md items-center">
            <CashIcon className="h-5 m-1 text-gray-400" />
            <input
              placeholder="Ksh 2,134/="
              className="w-full focus:outline-none text-gray-700 rounded-md p-1"
            />
          </div>
          <div className="bg-white w-full my-4 flex flex-row  ring-1 ring-gray-200 p-1 rounded-md items-center">
            <CashIcon className="h-5 m-1 text-gray-300" />
            <input
              placeholder="discount"
              className="w-full focus:outline-none text-gray-700 rounded-md p-1"
            />
          </div>
          <div className="bg-white w-full my-4 flex flex-row  ring-1 ring-gray-200 p-1 rounded-md items-center">
            <PhotographIcon className="h-5 m-1 text-gray-500" />
            <input
              className="w-full focus:outline-none text-gray-700 rounded-md p-1"
              type="file"
            />
          </div>

          <button className="bg-blue-500 block w-full mt-4 p-2 rounded-md focus:outline-none active:bg-blue-400">
            <p className="text-white font-semibold text-xl">Edit</p>
          </button>
        </div>
      </div>
    </div>
  );
}
