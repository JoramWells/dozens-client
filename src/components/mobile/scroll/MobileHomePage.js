import { DotsVerticalIcon, ThumbUpIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import ModalComponent from "../modal/ModalComponent";

export default function MobileHomePage({ product }) {
  const { id, alt, productName, price, discount, likes } = product;
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="mobile__body" data-testid={`product-${id}`}>
        <Helmet>
          <title>HomePage | Dozens Kenya</title>
        </Helmet>

        <div className="p-4 " style={{ backgroundColor: "whitesmoke" }}>
          <div className="flex flex-col content-center items-center space-y-8">
            <figure
              style={{ width: "18rem", border: "1px solid #F0F0F0 " }}
              className="rounded-md bg-white"
            >
              <div
                className="absolute bg-black text-gray-200 p-1 rounded-full m-1 bg-opacity-20"
                style={{ right: "20px" }}
              >
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
                <blockquote>{productName}</blockquote>
                <p className="text-gray-600">Airforce Maziwa</p>
                <figcaption>
                  <div>
                    <p className="font-semibold text-gray-600">{price}</p>
                    <p className="text-lg font-semibold text-gray-700">
                      Kshs 2,213/=
                    </p>
                  </div>
                  <div className="line-through text-sm text-gray-300 font-bold">
                    {discount}
                    Kshs 4,321/=
                  </div>
                  <div className="flex flex-row space-x-2 items-center content-center mt-4">
                    {likes}
                    <p className="text-sm text-gray-400">231</p>
                    <ThumbUpIcon className="h-5 text-gray-500" />
                  </div>
                </figcaption>
              </div>
            </figure>
          </div>
        </div>
      </div>
      <ModalComponent isOpen={isOpen} close={() => setOpen(false)}>
        <p>item details</p>
      </ModalComponent>
    </>
  );
}
