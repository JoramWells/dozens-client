import React, { useCallback, useState } from "react";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";

function MobileNavigationBar() {
  const [visible, setVisible] = useState("hidden");
  const [diVisible, setDiVisible] = useState("visible");

  function showNav(){
    setVisible("visible");
    setDiVisible("hidden");

  }

  const hideNav = useCallback(() => {
    setVisible("hidden");
    setDiVisible("visible");
  }, [setDiVisible]);

  return (
    <>
      {/* Search nav */}
      <nav
        style={{ visibility: visible }}
        className="fixed top-0 w-full shadow-md p-2 bg-yellow-400 z-0"
      >
        <div className="flex flex-row justify-center content-center items-center space-x-4">
          <div onClick={()=>hideNav()}>
            <ArrowNarrowLeftIcon className="h-5" />
          </div>
          <div className="">
            <input placeholder="Search..." className=" bg-transparent p-1" />
          </div>
        </div>
      </nav>

      {/* Home nav */}
      <nav
        className="flex flex-row p-2 justify-between shadow-md bg-yellow-400"
        style={{ visibility: diVisible }}
      >
        <button onClick={showNav}>Home</button>
        <div>Search</div>
        <div>Account</div>
      </nav>
    </>
  );
}

export default MobileNavigationBar;
