import { ThumbUpIcon } from "@heroicons/react/solid";
import React from "react";
import { Helmet } from "react-helmet";

export default function MobileHomePage({product}) {
  const {id,src,alt,productName,price,discount,likes} = product
  return (
    <div className="mobile__body" data-testid={`product-${id}`}>

      <div className="p-4">
        <div className="flex flex-col content-center items-center space-y-8">
          <figure style={{ width: "18rem", border: "1px solid whitesmoke" }}>
            <img
              src={src}
              style={{ width: "18rem", height: "170px" }}
              alt={alt}
            />
            <div className="p-2">
              <blockquote>{productName}</blockquote>
              <figcaption>
                <div>
                  <p className="font-semibold text-gray-600">{price}</p>
                </div>
                <div className="line-through text-sm text-gray-500">
                  {discount}
                </div>
                <div className="flex flex-row space-x-2">
                  {likes}
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
