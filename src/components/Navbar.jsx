import React from "react";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
  const menuRef = useRef(null);
  const handleClick = () => {
    menuRef.current.classList.toggle("hidden");
  };

  return (
    <nav className="text-black dark:text-white sm:py-3 py-1 dark:border-gray-200 dark:bg-gray-500 w-screen fixed top-0">
      <div className="flex flex-wrap items-center justify-around">
        <a href="#about" className="flex items-center">
          <FontAwesomeIcon
            icon={faAddressCard}
            size="1x"
            className="text-3xl"
          />
        </a>
        <div className="md:hidden">
          <ul className=" flex space-x-8 text-3xl">
            <li className="hover:bg-transparent">
              <a href="https://github.com/DiegoAcetun">
                <FontAwesomeIcon icon={faGithub} size="1x" />
              </a>
            </li>
            <li className="hover:bg-transparent">
              <a href="https://t.me/DiegoAcetun">
                <FontAwesomeIcon icon={faTelegram} size="1x" />
              </a>
            </li>
          </ul>
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center text-3xl border-2 border-blue-500 rounded-lg md:hidden "
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => {
            handleClick();
          }}
        >
          {/* <svg
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
          </svg> */}
          <FontAwesomeIcon icon={faBars} size="1x" />
        </button>

        <div className="hidden w-full md:flex md:w-auto" ref={menuRef}>
          <ul className="flex flex-col  mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-3xl text-3xl space-y-3 md:space-y-0 items-center">
            <li className="">
              <a href="#projects" className="" aria-current="page">
                Proyectos
              </a>
            </li>
            <li>
              <a href="#devSkills" className="">
                Desarrollo
              </a>
            </li>
            <li>
              <a href="#skills" className="">
                Habilidades
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex md:space-x-8 text-3xl">
          <li className="md:flex hidden">
            <a href="https://github.com/DiegoAcetun">
              <FontAwesomeIcon icon={faGithub} size="1x" />
            </a>
          </li>
          <li className="md:flex hidden">
            <a href="https://t.me/DiegoAcetun">
              <FontAwesomeIcon icon={faTelegram} size="1x" />
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
}
