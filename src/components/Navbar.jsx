import React from "react";
import { useRef } from "react";
export default function Navbar() {
  const menuRef = useRef(null);
  const handleClick = () => {
    menuRef.current.classList.toggle("hidden");
  };

  return (
    <nav className="bg-white py-4 border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap items-center ml-5">
        <a href="https://flowbite.com/" className="flex items-center">
          <img
            src="https://raw.githubusercontent.com/DiegoAcetun/my-web-site/main/public/favicon.ico"
            className="mr-3 h-6 sm:h-7"
            alt="logo"
          />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center text-sm text-gray-400 rounded-lg md:hidden ml-auto mr-2"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => {
            handleClick();
          }}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className="hidden w-full md:block md:w-auto ml-auto md:mr-5 text-white"
          ref={menuRef}
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-2xl text-xl pl-0 md:p-0 space-y-3 md:space-y-0">
            <li>
              <a href="#" className="" aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="">
                About
              </a>
            </li>
            <li>
              <a href="#" className="">
                Services
              </a>
            </li>
            <li>
              <a href="#" className=" ">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
