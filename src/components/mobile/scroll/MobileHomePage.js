import { DotsVerticalIcon, StarIcon } from "@heroicons/react/solid";
import { ThumbUpIcon } from "@heroicons/react/outline";

import React, { useState } from "react";
import { Helmet } from "react-helmet";
import ModalComponent from "../modal/ModalComponent";

export default function MobileHomePage({ product }) {
  const { id, alt, body, price, discount, likes } = product;
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="mobile__body" data-testid={`product-${id}`} key={id}>
        <Helmet>
          <title>HomePage | Dozens Kenya</title>
        </Helmet>

        <div className="p-4 " style={{ backgroundColor: "whitesmoke" }}>
          <div className="flex flex-col content-center items-center space-y-8">
            <figure
              style={{ width: "18rem", border: "1px solid #F0F0F0 " }}
              className="rounded-md bg-white"
            >
              <div className="absolute active:bg-black focus:bg-black text-gray-50 p-1 rounded-full flex justify-end flex-row items-end focus:bg-opacity-20 active:bg-opacity-20 ">
                <DotsVerticalIcon
                  className="h-5"
                  onClick={() => setOpen(true)}
                />
              </div>
              <img
                src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                style={{ width: "18rem", height: "170px" }}
                alt={alt}
              />
              <div className="p-2">
                <blockquote>{id}</blockquote>

                <p style={{ color: "#00ADAD" }}>Airforce Maziwa</p>
                <figcaption>
                  <div>
                    <p className="font-semibold text-gray-600">{price}</p>
                    <p className=" font-bold text-gray-600">Kshs 2,213/=</p>
                  </div>
                  <div className="line-through text-sm text-gray-300">
                    {discount}
                    Kshs 4,321/=
                    {likes}
                  </div>
                  <div className="flex flex-row items-center justify-center content-center mt-2">
                    <div>
                      <p className="text-sm text-gray-400">231</p>
                    </div>
                    <div>
                      <ThumbUpIcon className="h-5 text-gray-400" />
                    </div>
                  </div>
                </figcaption>
              </div>
            </figure>
          </div>
        </div>
      </div>
      <ModalComponent isOpen={isOpen} close={() => setOpen(false)}>
        <p className="font-semibold" style={{ color: "#00ADAD" }}>
          Air force maziwa
        </p>
        <p className="text-gray-800  font-extrabold">Kshs 2,345/=</p>
        <div className="flex flex-row text-yellow-400 -space-x-1">
          <StarIcon className="h-5" />
          <StarIcon className="h-5" />
          <StarIcon className="h-5" />
          <StarIcon className="h-5" />
          <StarIcon className="h-5 text-gray-500" />
        </div>
        <div>
          <hr />
          <p className="text-gray-800 my-1">Available colors</p>
          <div className="flex flex-row space-x-2 m-0">
            <div
              className="bg-red-400  rounded-full "
              style={{ width: "1rem", height: "1rem" }}
            ></div>
            <div
              className="bg-green-400  rounded-full "
              style={{ width: "1rem", height: "1rem" }}
            ></div>
            <div
              className="bg-blue-400  rounded-full "
              style={{ width: "1rem", height: "1rem" }}
            ></div>
            <div
              className="bg-yellow-400  rounded-full "
              style={{ width: "1rem", height: "1rem" }}
            ></div>
          </div>
        </div>

        <div className="mt-2 mb-2">
          <p className="text-gray-800 m-0 font-semibold">Sizes</p>
          <div className="flex flex-row space-x-2 m-0">
            <div
              className="  text-gray-600 font-bold text-xs "
              style={{ width: "1rem", height: "1rem" }}
            >
              XL
            </div>
            <div
              className="  text-gray-600 font-bold text-xs "
              style={{ width: "1rem", height: "1rem" }}
            >
              LG
            </div>
            <div
              className="  text-gray-600 font-bold text-xs "
              style={{ width: "1rem", height: "1rem" }}
            >
              SM
            </div>
            <div
              className="  text-gray-600 font-bold text-xs "
              style={{ width: "1rem", height: "1rem" }}
            >
              XS
            </div>
          </div>
        </div>
        <div>
          <div style={{ height: 90, overflowY: "scroll" }}>
            <p className="text-gray-500 text-sm">{body}</p>
          </div>
        </div>
        <div className="pl-2 pr-8">
          <button
            style={{ backgroundColor: "#47817F" }}
            className="m-2 p-1 rounded-md w-full text-white"
          >
            BUY
          </button>
        </div>
      </ModalComponent>
    </>
  );
}
