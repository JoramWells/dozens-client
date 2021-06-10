import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  ChevronDownIcon,
  CogIcon,
  LoginIcon,
  LogoutIcon,
} from "@heroicons/react/solid";

export default function NavDropdown() {
  return (
    <div className="w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Options
            <ChevronDownIcon
              className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
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
