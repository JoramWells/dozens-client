import React, { useCallback, useState } from "react";
import {
  ArrowNarrowLeftIcon,
  HomeIcon,
  SearchIcon,
  UserIcon,
  XIcon,
} from "@heroicons/react/solid";
import { Link } from "react-router-dom";

function MobileNavigationBar() {
  const [visible, setVisible] = useState("hidden");
  const [diVisible, setDiVisible] = useState("visible");

  const showNav = useCallback(() => {
    setVisible("visible");
    setDiVisible("hidden");
  }, [setVisible, setDiVisible]);

  const hideNav = useCallback(() => {
    setVisible("hidden");
    setDiVisible("visible");
  }, [setDiVisible, setVisible]);

  return (
    <>
      {/* Search nav */}
      <nav
        style={{ visibility: visible, transition: "350ms" }}
        className="fixed top-0 w-full shadow-md p-2 bg-white z-0"
      >
        <div className="flex flex-row justify-center content-center items-center space-x-4">
          <div onClick={() => hideNav()}>
            <ArrowNarrowLeftIcon className="h-5 text-gray-700" />
          </div>
          <div className=" bg-gray-100 flex flex-row items-center content-center rounded-full">
            <SearchIcon className="h-5 m-2 text-gray-500" />
            <input placeholder="Search..." className=" bg-transparent p-1" />
            <XIcon className="h-5 m-2 text-gray-500" />
          </div>
        </div>
      </nav>

      {/* Home nav */}
      <nav
        className="flex flex-row p-4 justify-between shadow-md bg-white"
        style={{ visibility: diVisible, transition: "350ms" }}
        data-testid="mobile_nav"
      >
        <div className="flex flex-row space-x-2">
          <Link to="/">
            <HomeIcon className="h-5 text-gray-600" />
          </Link>
        </div>
        <div className="flex flex-row space-x-4">
        <SearchIcon className="h-5 text-gray-700" onClick={showNav} />

          <Link to="/register">
            <UserIcon className="h-5 text-gray-700" />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default MobileNavigationBar;
