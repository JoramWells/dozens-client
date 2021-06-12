import React, { useCallback, useState } from "react";
import {
  ArrowNarrowLeftIcon,
  HomeIcon,
  SearchIcon,
  XIcon,
} from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import NavDropdown from "../NavDropdown";
import styled from "styled-components";

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  transition: 350ms;
  background-color: #303030;
  padding: 0.7rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

function MobileNavigationBar() {
  const [visible, setVisible] = useState("hidden");

  const showNav = useCallback(() => {
    setVisible("visible");
  }, [setVisible]);

  const hideNav = useCallback(() => {
    setVisible("hidden");
  }, [setVisible]);

  return (
    <>
      {/* Home page nav */}
      <Navbar data-testid="mobile_nav" style={{ visibility: "visible" }}>
        <div className="p-1">
          <Link to="/">
            <HomeIcon className="h-5 text-white" />
          </Link>
        </div>
        <div className="flex flex-row space-x-4 items-center">
          <SearchIcon className="h-5 text-white" onClick={showNav} />

          <NavDropdown />
        </div>
      </Navbar>

      {/* Search nav */}
      <Navbar className="test" style={{ visibility: visible }}>
        <div onClick={hideNav}>
          <ArrowNarrowLeftIcon className="h-5 text-gray-100" />
        </div>
        <div className=" bg-gray-100 flex flex-row items-center content-center rounded-full">
          <SearchIcon className="h-5 m-1 text-gray-500" />
          <input
            placeholder="Search..."
            className=" bg-transparent"
            style={{ margin: "0", padding:".19rem" }}
          />
          <XIcon className="h-5 m-1 text-gray-500" />
        </div>
      </Navbar>
    </>
  );
}

export default MobileNavigationBar;
