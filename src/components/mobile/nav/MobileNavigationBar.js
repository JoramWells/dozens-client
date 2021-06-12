import React, { useCallback, useState } from "react";
import {
  ArrowNarrowLeftIcon,
  HomeIcon,
  SearchIcon,
  XIcon,
} from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import NavDropdown from "../NavDropdown";

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
        style={{ visibility: visible, transition: "350ms", backgroundColor:"#303030" }}
        className="fixed top-0 w-full shadow-md p-3 z-10"
      >
        <div className="flex flex-row justify-center content-center items-center space-x-4">
          <div onClick={() => hideNav()}>
            <ArrowNarrowLeftIcon className="h-5 text-gray-100" />
          </div>
          <div className=" bg-gray-100 flex flex-row items-center content-center rounded-full">
            <SearchIcon className="h-5 m-1 text-gray-500" />
            <input placeholder="Search..." className=" bg-transparent p-1" style={{margin:"0px"}} />
            <XIcon className="h-5 m-1 text-gray-500" />
          </div>
        </div>
      </nav>

      {/* Home nav */}
      <nav
        className="flex flex-row p-3 justify-between items-center shadow-lg fixed w-full top-0 z-10"
        style={{ visibility: diVisible, transition: "350ms",backgroundColor:"#303030" }}
        data-testid="mobile_nav"
      >
        <div className="flex flex-row space-x-2 p-1">
          <Link to="/">
            <HomeIcon className="h-5 text-white" />
          </Link>
        </div>
        <div className="flex flex-row space-x-4 items-center">
          <SearchIcon className="h-5 text-white" onClick={showNav} />

          <NavDropdown />
        </div>
      </nav>
    </>
  );
}

export default MobileNavigationBar;
