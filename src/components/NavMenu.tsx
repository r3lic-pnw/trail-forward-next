"use client";

import { useState } from "react";
import NavMenuItem from "./NavMenuItem";

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setIsOpen(false);
        }
      }}
      className="flex justify-center items-center">
      <button
        id="menu-button"
        aria-label="Open Menu"
        aria-expanded="false"
        aria-controls="main-nav"
        className="bg-none border-none cursor-pointer flex flex-col justify-center items-center h-10 w-10"
        onClick={() => setIsOpen(!isOpen)}>
        <span className="block w-7 h-1 mt-1 mb-1 rounded-xs transition duration-300 list-none bg-amber-950"></span>
        <span className="block w-7 h-1 mt-1 mb-1 rounded-xs transition duration-300 list-none bg-amber-950"></span>
        <span className="block w-7 h-1 mt-1 mb-1 rounded-xs transition duration-300 list-none bg-amber-950"></span>
      </button>
      <nav
        id="main-nav"
        aria-label="Main Navigation"
        className="absolute top-full right-0 p-1 w-sm bg-amber-300 border-2 border-amber-900"
        style={{ display: isOpen ? "block" : "none" }}>
        <ul onClick={() => setIsOpen(false)}>
          <li>
            <NavMenuItem dest="/" displayText="Home" />
          </li>
          <li>
            <NavMenuItem dest="/events" displayText="Events" />
          </li>
          <li>
            <NavMenuItem dest="/gallery" displayText="Gallery" />
          </li>
          <li>
            <NavMenuItem dest="/contact" displayText="Contact Us" />
          </li>
        </ul>
      </nav>
    </div>
  );
}
