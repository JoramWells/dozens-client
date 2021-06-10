import { ThumbUpIcon } from "@heroicons/react/solid";
import React from "react";
import { Helmet } from "react-helmet";

export default function MobileHomePage({product}) {
  const {id,alt,productName,price,discount,likes} = product
  return (
    <div className="mobile__body" data-testid={`product-${id}`}>
      <Helmet>
        <title>HomePage | Dozens Kenya</title>
      </Helmet>

      <div className="p-4">
        <div className="flex flex-col content-center items-center space-y-8">
          <figure style={{ width: "18rem", border: "1px solid #E8E8E8 " }} className="rounded-md">
            <img
              src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
              style={{ width: "18rem", height: "170px" }}
              alt={alt}
            />
            <div className="p-2">
              <blockquote>{productName}</blockquote>
              <p className="text-gray-600">
              Airforce Maziwa

              </p>
              <figcaption>
                <div>
                  <p className="font-semibold text-gray-600">{price}</p>
                  <p className="text-lg font-semibold text-yellow-400">
                  Kshs 2,213/=

                  </p>
                </div>
                <div className="line-through text-sm text-gray-300">
                  {discount}
                  Kshs 4,321/=
                </div>
                <hr className="my-2" style={{color:"#A9A9A9"}}/>
                <div className="flex flex-row space-x-2 items-center content-center">
                  {likes}
                  <p className="text-sm text-gray-400">
                  231
                  </p>
                  <ThumbUpIcon className="h-5 text-gray-500" />
                </div>
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
}
