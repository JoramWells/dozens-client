import { ThumbUpIcon } from "@heroicons/react/solid";
import React from "react";
import { Helmet } from "react-helmet";

export default function MobileHomePage() {
  return (
    <div className="mobile__body">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dozens Kenya</title>
      </Helmet>
      <main className="p-4">
        <div className="flex flex-col space-y-8">
          <figure className="shadow-lg">
            <img
              src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
              style={{ width: "25rem", height: "200px" }}
              className="rounded-t-md"
              alt="shoe1"
            />
            <div className="p-2">
              <blockquote>product name</blockquote>
              <figcaption>
                <div>
                  <p className="font-semibold text-gray-600">3,456/=</p>
                </div>
                <div className="line-through text-sm text-gray-500">
                  12,344/=
                </div>
                <div>
                  <ThumbUpIcon className="h-5 text-gray-500" />
                </div>
              </figcaption>
            </div>
          </figure>
          <figure className="shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              style={{ width: "25rem", height: "200px" }}
              className="rounded-t-md"
              alt="shoe2"
            />
            <div className="p-2">
              <blockquote>product name</blockquote>
              <figcaption>
                <div>
                  <p className="font-semibold text-gray-600">3,456/=</p>
                </div>
                <div className="line-through text-sm text-gray-500">
                  12,344/=
                </div>
                <div>
                  <ThumbUpIcon className="h-5 text-gray-500" />
                </div>
              </figcaption>
            </div>
          </figure>
          <figure className="border-1">
            <img
              src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
              style={{ width: "25rem", height: "200px" }}
              className="rounded-t-md"
              alt="shoe3"
            />
            <div className="p-2">
              <blockquote>product name</blockquote>
              <figcaption>
                <div>
                  <p className="font-semibold text-gray-600">3,456/=</p>
                </div>
                <div className="line-through text-sm text-gray-500">
                  12,344/=
                </div>
                <div>
                  <ThumbUpIcon className="h-5 text-gray-500" />
                </div>
              </figcaption>
            </div>
          </figure>
        </div>
      </main>
    </div>
  );
}
