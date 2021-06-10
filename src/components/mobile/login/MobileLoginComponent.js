import { ArrowNarrowLeftIcon,  LockClosedIcon, MailIcon } from '@heroicons/react/solid'
import React from 'react'
import {Helmet} from 'react-helmet'
import { Link } from 'react-router-dom'

export default function MobileLoginComponent() {
    return (
        <div className="bg-gray-50 h-screen "
        data-testid="register_div"
    
         >
          <Helmet>
            <title>Login | Dozens Kenya</title>
          </Helmet>
          
          <nav className="flex flex-row items-center justify-center space-x-4 mb-2 top-0 bg-white p-2 shadow-lg">
              <div>
                  <ArrowNarrowLeftIcon className="h-5" />
              </div>
            <p className=" text-gray-700 text-xl">Create  account</p>
          </nav>
          <div className="p-4">
          <div className="flex flex-col p-4 items-center justify-center content-center bg-white rounded-md "
            style={{border:"solid #E0E0E0 1px"}}
    
          >
            <div className="bg-white w-full my-4 flex flex-row ring-1 p-1 ring-gray-200 rounded-md" >
              <MailIcon className="h-5 m-1 text-gray-500" />
              <input
                placeholder="Enter email"
                className="w-full focus:outline-none text-gray-700 rounded-md p-1"
              />
            </div>

            <div className="bg-white w-full my-4 flex flex-row  ring-1 ring-gray-200 p-1 rounded-md">
              <LockClosedIcon className="h-5 m-1 text-gray-500" />
              <input
                type="password"
                placeholder="Password"
                className="w-full focus:outline-none text-gray-700 rounded-md p-1"
              />
            </div>
            <div>
              <Link to="/register" className="text-sm text-gray-400">
                Don't have an account? Sign up
              </Link>
            </div>
            <button className="bg-blue-500 block w-full mt-4 p-2 rounded-md focus:outline-none active:bg-blue-400">
                <p className="text-white font-semibold text-xl">
                SignIn
    
                </p>
            </button>
          </div>
          </div>
    
        </div>
    )
}
