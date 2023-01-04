import React, { useState } from "react";
import { LeftSection, RightSection } from "./Components";
import { MenuIcon, PlusIcon } from "./constants";

export default function App() {
  // Toggle
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="sticky top-0 z-10 flex items-center border-b border-white/20 bg-gray-800 pl-1 pt-1 text-gray-200 sm:pl-3 md:hidden">
        <button
          type="button"
          className={`-ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center outline-none justify-center rounded-md focus:ring-1 focus:ring-white ${
            !show && "!ring-0"
          } dark:hover:text-white text-gray-100`}
          onClick={() => setShow(!show)}
        >
          <span className="sr-only">Open sidebar</span>
          <MenuIcon />
        </button>
        <h1 className="flex-1 text-center text-base font-normal">New chat</h1>
        <button type="button" className="px-3">
          <PlusIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Left Section */}
      <LeftSection {...{ show }} />

      {/* Right Section */}
      <RightSection />
    </div>
  );
}
