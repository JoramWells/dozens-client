import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  CogIcon,
  LoginIcon,
  UserIcon,
} from "@heroicons/react/solid";

export default function NavDropdown() {
  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="p-1 text-sm font-medium active:bg-none bg:rounded-full text-white bg-black rounded-full bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <UserIcon className="h-5" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-2 py-2 ">
              <Menu.Item>
                <div className="flex flex-row text-gray-500 space-x-4 items-center content-center justify-between">
                  Login
                  <LoginIcon className="h-5 " />
                </div>
              </Menu.Item>
            </div>
            <div className="px-2 py-2">
              <Menu.Item>
                <div className="flex  flex-row space-y-2 text-gray-500 items-center content-center justify-between">
                  Settings
                  <CogIcon className="h-5" />
                </div>
              </Menu.Item>
            </div>
            {/* <div className="px-1 py-1">Login</div> */}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
