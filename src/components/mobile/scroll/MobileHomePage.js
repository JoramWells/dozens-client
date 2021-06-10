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
          <figure style={{ width: "18rem", border: "1px solid whitesmoke" }}>
            <img
              src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
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
