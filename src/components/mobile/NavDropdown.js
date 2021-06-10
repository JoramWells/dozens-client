import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  CogIcon,
  LoginIcon,
  LogoutIcon,
  UserIcon,
} from "@heroicons/react/solid";

export default function NavDropdown() {
  return (
    <div className="w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="p-2 m-0 text-sm font-medium bg:rounded-full text-white bg-black rounded-full bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
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
            <div className="px-1 py-1 ">
              <Menu.Item>
                <div>
                  <LoginIcon className="h-5" />
                  Login
                </div>
              </Menu.Item>
              <Menu.Item>
                <div>
                  <CogIcon className="h-5" />
                  Settings
                </div>
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                <div>
                  <LogoutIcon className="h-5" />
                  Logout
                </div>
              </Menu.Item>
            </div>
            <div className="px-1 py-1">Login</div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
