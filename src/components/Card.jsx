import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Card({image=null, title, description, icon=null, textColor}) {
  const isImage = image !== null;
  console.log(image);
  return (
    <div
      className={`max-w-sm bg-white rounded-lg border-8 border-red-800 shadow-md flex flex-col p-5 m-5 text-black`}
    >
      {isImage ? (
        <img className="rounded-lg w-full" src={image} alt={title} />
      ) : (
        <FontAwesomeIcon icon={icon} size="5x" className={textColor} />
      )}

      <div className="mt-8 mb-8">
        <a href="#">
          <h5 className="text-3xl tracking-tight">{title}</h5>
        </a>
        <p className="mb-3 text-2xl">{description}</p>
      </div>
      <a
        href="#"
        className="flex border bg-blue-700 rounded-lg hover:bg-blue-800 over:bg-blue-700 w-full text-3xl justify-center mt-auto text-white"
      >
        <p>Ver</p>
      </a>
    </div>
  );
}
