import React from "react";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
  const menuRef = useRef(null);
  const handleClick = () => {
    // menuRef.current.classList.toggle("hidden");
    // menuRef.current.classList.toggle("");
    // menuRef.current.classList.toggle("hidden");
    menuRef.current.classList.toggle("-translate-y-96");
    menuRef.current.classList.toggle("translate-y-24");
    // menuRef.current.classList.toggle("translate-y-24");
    // menuRef.current.classList.toggle("absolute");
    // transition ease-in-out -translate-y-96 duration-1000

  };

  return (
    <nav className="text-black dark:text-white bg-white sm:py-3 py-1border-gray-200 w-screen fixed top-0 z-10">
      <div className="flex flex-wrap items-center justify-around">
        <a href="#" className="flex items-center">
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
          <FontAwesomeIcon icon={faBars} size="1x" />
        </button>

        <div
          className="transition ease-in-out -translate-y-96 md:translate-y-0 w-full md:flex md:w-auto md:static absolute bg-white duration-1000 mb-6 md:mb-0"
          ref={menuRef}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 md:text-3xl text-3xl space-y-3 md:space-y-0 items-center">
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
