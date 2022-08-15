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
      className={`bg-white rounded-lg border-8 border-red-800 shadow-md flex flex-col p-5 m-5 text-black xl:w-1/4 lg:w-1/3 md:1/2 sm:w-3/4 w-full `}
    >
        <FontAwesomeIcon
          icon={icon}
          size="5x"
          className={`${textColor} border-8`}
        />
      

      <div className="mt-8 mb-8">
          <h5 className="text-3xl tracking-tight">{title}</h5>
        {description ? <p className="mb-3 text-2xl">{description}</p> : null}
      </div>
      {link ? (
        <a
          href={link}
          className="flex border bg-blue-700 rounded-lg hover:text-yellow-400 w-full text-3xl justify-center mt-auto text-white"
        >
          <p>Ver</p>
        </a>
      ) : null}
    </div>
  );
}
