import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Card({
  title,
  description = null,
  icon = null,
  textColor,
  link = null,
}) {
  // console.log(image);
  return (
    <div
      className={`bg-white rounded-lg border-8 border-orange-400 shadow-md flex flex-col p-5 m-5 text-black xl:w-1/4 lg:w-1/3 md:1/2 w-3/4 md:transition md:ease-in-out md:hover:scale-110 md:duration-100 hover:cursor-pointer`}
    >
      <FontAwesomeIcon
        icon={icon}
        // size="5x"
        className={`${textColor} sm:text-9xl text-7xl`}
      />

      <div className="mt-8 mb-8">
        <h5 className="sm:text-3xl text-2xl text-blue-800 text-center tracking-tight">
          {title}
        </h5>
        {description ? (
          <p className="mb-3 sm:text-2xl text-xl text-center">{description}</p>
        ) : null}
      </div>
      {link ? (
        <a
          href={link}
          className="flex border bg-violet-800 rounded-lg w-full text-3xl justify-center mt-auto text-white"
        >
          <p>Ver</p>
        </a>
      ) : null}
    </div>
  );
}
